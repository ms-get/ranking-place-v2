import retry from "async-retry";
import { APIResponseError, Client } from "@notionhq/client";
import { PartialDatabaseObjectResponse, QueryDatabaseParameters } from "@notionhq/client/build/src/api-endpoints";
import { NOTION } from "./constants";
import { makePostFile } from "./makePostFile";

type WithAuth<P> = P & {
  auth?: string;
};

export const notionAPI = new Client({ auth: NOTION.AUTH_KEY });

const run = async () => {
  const params: WithAuth<QueryDatabaseParameters> = {
    database_id: NOTION.DATABASE_ID,
    start_cursor: undefined,
  };

  const posts: PartialDatabaseObjectResponse[] = [];

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

    posts.push(...(res.results as any));

    if (!res.has_more) {
      break;
    }

    params.start_cursor = res.next_cursor as string;
  }

  makePostFile(posts);
};

run();
