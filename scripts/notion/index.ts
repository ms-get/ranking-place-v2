import retry from "async-retry";
import { APIResponseError, Client } from "@notionhq/client";
import { PartialDatabaseObjectResponse, QueryDatabaseParameters } from "@notionhq/client/build/src/api-endpoints";
import { NOTION } from "./constants";
import { makePostFile } from "./makePostFile";

type WithAuth<P> = P & {
  auth?: string;
};

const run = async () => {
  const notionAPI = new Client({ auth: NOTION.AUTH_KEY });

  const params: WithAuth<QueryDatabaseParameters> = {
    database_id: NOTION.DATABASE_ID,
    start_cursor: undefined,
  };

  const posts = {};

  while (true) {
    const res = await retry(
      async (bail) => {
        try {
          return await notionAPI.databases.query(params);
        } catch (error) {
          if (error instanceof APIResponseError) {
            if (error.status && error.status >= 400 && error.status < 500) {
              bail(error);
            }
          }
          throw error;
        }
      },
      {
        retries: 2,
      },
    );

    res.results.forEach((result) => {
      // @ts-ignore
      posts[result.properties.name.title[0].plain_text] = result;
    });

    if (!res.has_more) {
      break;
    }

    params.start_cursor = res.next_cursor as string;
  }

  makePostFile(posts);
};

run();
