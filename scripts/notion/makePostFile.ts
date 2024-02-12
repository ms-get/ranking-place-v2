import { PartialDatabaseObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import fs from "fs";

export const makePostFile = (posts: Record<string, any>) => {
  fs.writeFileSync(`./post/posts.ts`, `const post = ${JSON.stringify(posts)}`);
};
