import { PartialDatabaseObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import fs from "fs";
import { NotionToMarkdown } from "notion-to-md";
import { notionAPI } from ".";

const getText = (post: any, name: string) => {
  const property = post.properties[name];
  if (property.title) {
    return property.title[0] ? property.title[0].plain_text : "";
  }
  return property.rich_text[0] ? property.rich_text[0].plain_text : "";
};
const getDate = (post: any) => post.properties.lastModified.last_edited_time;

export const makePostFile = (posts: PartialDatabaseObjectResponse[], fileName: string) => {
  Promise.all(
    posts.map(async (post: any) => {
      const postURLSplitted = post.url.split("/");
      const pageId = postURLSplitted[postURLSplitted.length - 1];
      const hashedPageId = pageId.split("-")[pageId.split("-").length - 1];

      const n2m = new NotionToMarkdown({ notionClient: notionAPI });

      const MDblocks = await n2m.pageToMarkdown(hashedPageId);
      const mdString = n2m.toMarkdownString(MDblocks);

      return {
        id: getText(post, "name"),
        lastModified: getDate(post),
        description: getText(post, "meta-description"),
        title: getText(post, "meta-title"),
        content: mdString.parent,
      };
    }),
  ).then((post) => {
    fs.writeFileSync(`./src/constants/${fileName}.ts`, `export const ${fileName} = ${JSON.stringify(post)}`);
  });
};
