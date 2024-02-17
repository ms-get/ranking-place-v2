import { posts, postsType } from "@/constants/posts";
import { PostCard } from "./PostCard";
import { enPosts, enPostsType } from "@/constants/enPosts";
import { Lang } from "@/helpers/lang";
import { localCurry } from "@/helpers/localization";

interface IProps {
  posts: typeof posts | typeof enPosts;
  lang: Lang;
}

export const PostCardWrapper = ({ posts, lang }: IProps) => {
  const local = localCurry(lang);
  return (
    <div className="flex justify-center min-h-full">
      <div className=" max-w-[1128px] w-[1128px] my-32 px-4">
        <h1 className=" !text-3xl text-slate-700 mb-10 font-semibold ml-2 text-center">{local("새로운 비교글들")}</h1>
        <main className="flex flex-wrap justify-center gap-8 m-auto bg-white gap-y-8">
          {posts.map((post) => (
            <PostCard {...post} key={post.id} />
          ))}
        </main>
      </div>
    </div>
  );
};
