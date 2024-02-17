import { enPosts } from "@/constants/enPosts";
import { posts } from "@/constants/posts";
import { Lang } from "@/helpers/lang";
import { usePathname } from "next/navigation";

export const usePost = () => {
  const pathnameSplitSlash = usePathname().split("/");
  const pathname = pathnameSplitSlash[pathnameSplitSlash.length - 1];

  const getPost = (lang: Lang) => {
    switch (lang) {
      case "en":
        return enPosts.find((post) => post.id === pathname);
      default:
        return posts.find((post) => post.id === pathname);
    }
  };

  return {
    getPost,
  };
};
