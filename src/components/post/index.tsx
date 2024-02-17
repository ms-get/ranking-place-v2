"use client";

import { useScroll } from "@/hooks/useScroll";
import { Header } from "../header";
import Image from "next/image";
import { Markdown } from "./Markdown";
import { Lang } from "@/helpers/lang";
import { usePost } from "@/hooks/usePost";
import { RecommendPosts } from "./recommendPosts";
import { ContentHeader } from "./ContentHeader";
import { useAmplitude } from "@/hooks/useAmplitude";

interface IProps {
  lang: Lang;
}

export const Post = ({ lang }: IProps) => {
  useAmplitude();
  const { scaleImageSize, scrollOpacity } = useScroll();
  const { getPost } = usePost();
  const post = getPost(lang);

  if (!post) return null;

  const { lastModified, content, image, title, description } = post;

  return (
    <>
      <Header />
      <div className="relative mt-[100vh] lg:mt-0">
        <div
          className="fixed lg:relative w-full h-[100vh] lg:h-auto flex lg:flex-col top-0 overflow-hidden"
          style={{ opacity: scrollOpacity }}
        >
          <img
            style={{ scale: scaleImageSize }}
            className="w-[50%] lg:w-full lg:h-[400px] object-cover"
            src={image}
            width={260}
            height={326}
            alt="추천 아티클 이미지"
          />
          <ContentHeader title={title} subTitle={description} lastModified={lastModified} />
        </div>
        <main className="relative z-10 top-0 flex flex-col items-center bg-white pt-10 pb-20">
          <Markdown content={content} />
          {/* <RecommendPosts lang={lang} /> */}
        </main>
      </div>
    </>
  );
};
