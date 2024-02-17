import { PostCardWrapper } from "@/components/home/PostCardWrapper";
import { enPosts } from "@/constants/enPosts";

export default () => {
  return <PostCardWrapper posts={enPosts} lang={"en"} />;
};
