"use client"

import { Header } from "@/components/header";
import Image from "next/image";
import { useEffect, useState } from "react";
import { exampleData } from "./constants";

export default function Page() {
  const {title,subTitle,date,image,content,articles} = exampleData

  const [scrollOpacity, setScrollOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const {scrollTop,clientHeight} = document.documentElement
      if(1- (scrollTop / clientHeight) < 0) setScrollOpacity(0)
      else setScrollOpacity(1 - (scrollTop / clientHeight))
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scaleImageSize = 1.3 - (scrollOpacity / 10 * 3)
    return (
      <>
      <Header />
       <div className="relative mt-[100vh] lg:mt-0">
         <div className="fixed lg:relative w-full h-[100vh] lg:h-auto flex lg:flex-col top-0 overflow-hidden" style={{opacity: scrollOpacity}}>
           <Image style={{ scale: scaleImageSize }} className="w-[50%] lg:w-full lg:h-[400px] object-cover" src={image} width={260} height={326} alt="추천 아티클 이미지"/>
           <div className=" relative bg-white p-8 pt-[calc(10vh+24px)] lg:pt-6 flex flex-col gap-4">
             <h1 className="mt-11 text-[5vw] lg:text-4xl font-bold leading-[1.15] mb-6 underline">{title}</h1>
             <p className="text-xl lg:text-base">{subTitle}</p>
            <p className="text-[1rem] lg:text-sm">{date}</p>
          </div>
        </div>
        <main className="relative z-10 top-0 flex flex-col items-center bg-white pt-10 pb-20">
          <section className="max-w-[800px] px-4 w-full mb-10 whitespace-pre-wrap ">
            {content}
          </section>
          <aside className="max-w-[1140px] w-full px-3 xl:px-2">
            <p className="my-4 text-left w-full text-xl font-bold xl:w-[560px] mx-auto">추천 아티클</p>
            <div className="flex flex-wrap xl:flex-col gap-4 justify-start items-center">
              {articles.map(({title,subTitle,date}) => <article className="w-[260px] xl:w-[560px] flex flex-col xl:flex-row gap-4 max-w-full">
                <Image className=" bg-black w-full h-[326px] sm:h-[200px] max-w-[350px] sm:w-[180px] xl:w-full object-cover rounded-sm" src={image} width={260} height={326} alt="추천 아티클 이미지"/>
                <div className="flex flex-col gap-4">
                  <h2 className=" text-3xl font-bold xl:text-[1.4rem]">{title}</h2>
                  <p>{subTitle}</p>
                  <p>{date}</p>
                </div>
              </article>)}
            </div>
          </aside>
       </main>
      </div>

      </>
     
    );
  }
  