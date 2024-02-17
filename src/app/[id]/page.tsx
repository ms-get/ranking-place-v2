import { Post } from "@/components/post";
import { enPosts } from "@/constants/enPosts";

export async function generateStaticParams() {
  return enPosts.map((post) => ({
    id: post.id.toString(),
  }));
}

export default async () => {
  return <Post lang={"ko"} />;
};
