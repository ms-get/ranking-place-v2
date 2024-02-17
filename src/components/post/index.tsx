"use client";

import { exampleData } from "@/app/[id]/constants";
import { useScroll } from "@/hooks/useScroll";
import { Header } from "../header";
import Image from "next/image";
import { Markdown } from "./Markdown";
import { Lang } from "@/helpers/lang";
import { LastModified } from "./lastModified";
import { usePost } from "@/hooks/usePost";
import { RecommendPosts } from "./recommendPosts";
import { ContentHeader } from "./ContentHeader";

interface IProps {
  lang: Lang;
}

export const Post = ({ lang }: IProps) => {
  const { title, subTitle, image, articles } = exampleData;
  const { scaleImageSize, scrollOpacity } = useScroll();
  const { getPost } = usePost();
  const post = getPost(lang);

  if (!post) return null;

  const { lastModified, content } = post;

  return (
    <>
      <Header />
      <div className="relative mt-[100vh] lg:mt-0">
        <div
          className="fixed lg:relative w-full h-[100vh] lg:h-auto flex lg:flex-col top-0 overflow-hidden"
          style={{ opacity: scrollOpacity }}
        >
          <Image
            style={{ scale: scaleImageSize }}
            className="w-[50%] lg:w-full lg:h-[400px] object-cover"
            src={image}
            width={260}
            height={326}
            alt="추천 아티클 이미지"
          />
          <ContentHeader title={title} subTitle={subTitle} lastModified={lastModified} />
        </div>
        <main className="relative z-10 top-0 flex flex-col items-center bg-white pt-10 pb-20">
          <Markdown content={content} />
          <RecommendPosts lang={lang} />
        </main>
      </div>
    </>
  );
};
