import { enPostsType } from "@/constants/enPosts";
import { postsType } from "@/constants/posts";
import Image from "next/image";
import Link from "next/link";

export const PostCard = ({ lastModified, title, id, image }: enPostsType | postsType) => {
  return (
    <Link href={`${id}`} className="transition-all hover:-translate-y-3">
      <article className=" max-w-[326px] w-[326px]">
        <img src={image} alt="cover" width={326} height={326} className="rounded-lg w-[326px] h-[326px] object-cover" />
        <h2 className="!text-lg font-semibold mt-3">{title}</h2>
        <p className="text-xs ">{lastModified}에 마지막으로 업데이트됨</p>
      </article>
    </Link>
  );
};
