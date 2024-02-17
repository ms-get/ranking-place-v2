import { Post } from "@/components/post";
import { enPosts } from "@/constants/enPosts";
import { posts } from "@/constants/posts";
import { generateMetadataImpl } from "@/helpers/generateMetadata";

export const generateMetadata = generateMetadataImpl("ko", posts);

export async function generateStaticParams() {
  return enPosts.map((post) => ({
    id: post.id.toString(),
  }));
}

export default async () => {
  return <Post lang={"ko"} />;
};
