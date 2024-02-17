import { Post } from "@/components/post";
import { post } from "@/constants/post";

export async function generateStaticParams() {
  return post.map((post) => ({
    id: post.id.toString(),
  }));
}

export default async () => {
  return <Post />;
};
