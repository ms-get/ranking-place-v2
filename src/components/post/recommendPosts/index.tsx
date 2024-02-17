import { getDateFormat } from "@/helpers/date";
import { Lang } from "@/helpers/lang";
import { localCurry } from "@/helpers/localization";
import { usePost } from "@/hooks/usePost";
import Image from "next/image";
import Link from "next/link";

interface IProps {
  lang: Lang;
}

export const RecommendPosts = ({ lang }: IProps) => {
  const local = localCurry(lang);
  const { recommendPost } = usePost();

  return (
    <aside className="max-w-[1140px] w-full px-3 xl:px-2">
      <p className="my-4 text-left w-full max-w-full text-xl font-bold xl:w-[560px] mx-auto">{local("추천 아티클")}</p>
      <div className="flex flex-wrap xl:flex-col gap-6 justify-start items-center">
        {recommendPost(lang).map(({ id, title, description, lastModified, image }) => (
          <Link href={id} key={id}>
            <article className="max-w-full w-[260px] xl:w-[560px] flex flex-col xl:flex-row gap-4" key={lastModified}>
              <Image
                className="  bg-black h-[326px] w-[260px] sm:h-[200px] max-w-[350px] sm:w-[180px] object-cover rounded-sm"
                src={image}
                width={260}
                height={326}
                alt="추천 아티클 이미지"
              />
              <div className="flex flex-col gap-4">
                <h2 className=" text-3xl font-bold xl:text-[1.4rem]">{title}</h2>
                <p>{description}</p>
                <p>{getDateFormat(lastModified)}</p>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </aside>
  );
};
