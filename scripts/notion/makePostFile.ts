import { PartialDatabaseObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import fs from "fs";

const getText = (post: any) => post.properties.name.title[0].plain_text;
const getDate = (post: any) => post.properties.lastModified.last_edited_time;

export const makePostFile = (posts: PartialDatabaseObjectResponse[]) => {
  fs.writeFileSync(
    `./src/constants/posts.ts`,
    `const post = ${JSON.stringify(
      posts.map((post) => {
        return {
          id: getText(post),
          lastModified: getDate(post),
        };
      }),
    )}`,
  );
  fs.writeFileSync(`./src/constants/post.ts`, `const post = ${JSON.stringify(posts)}`);
};
