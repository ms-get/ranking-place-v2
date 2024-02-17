import { enPosts, enPostsType } from "@/constants/enPosts";
import { posts, postsType } from "@/constants/posts";
import { Lang } from "@/helpers/lang";
import { usePathname } from "next/navigation";

type FilterPostType = readonly postsType[] | readonly enPostsType[];

const filterPost = (lang: Lang): FilterPostType => {
  switch (lang) {
    case "en":
      return enPosts;
    default:
      return posts;
  }
};

const getNearPost = (posts: FilterPostType, idx: number) => {
  const slice = (start?: number, end?: number) => {
    return posts.slice(start, end);
  };
  const range = 2;
  const length = posts.length;
  const leftRange = idx - range;
  const rightRange = idx + range;
  const overLeft = idx - range < 0;
  const overRight = idx + range >= posts.length;
  if (overLeft) return [...slice(0, idx), ...slice(idx + 1, rightRange - leftRange + 1)];
  if (overRight) return [...slice(leftRange - (rightRange - length) - 1, idx - 1), ...slice(idx - 1, length - 1)];
  return [...slice(leftRange, idx), ...slice(idx + 1, rightRange + 1)];
};

export const usePost = () => {
  const pathnameSplitSlash = usePathname().split("/");
  const pathname = pathnameSplitSlash[pathnameSplitSlash.length - 1];

  const getPost = (lang: Lang) => {
    return filterPost(lang).find(({ id }) => id === pathname);
  };

  const recommendPost = (lang: Lang) => {
    const post = filterPost(lang);
    const idx = post.findIndex(({ id }) => id === pathname);
    return getNearPost(post, idx);
  };

  return {
    getPost,
    recommendPost,
  };
};
