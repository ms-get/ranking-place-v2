import { Post } from "@/components/post";
import { enPost } from "@/constants/enPost";

export async function generateStaticParams() {
  return enPost.map((post) => ({
    id: post.id.toString(),
  }));
}

export default async () => {
  return <Post />;
};
