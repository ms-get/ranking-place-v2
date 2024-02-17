import { Lang } from "@/helpers/lang";
import { LastModified } from "./lastModified";

interface IProps {
  title: string;
  subTitle: string;
  lastModified: string;
}

export const ContentHeader = ({ title, subTitle, lastModified }: IProps) => {
  return (
    <div className=" relative bg-white p-8 pt-[calc(10vh+24px)] lg:pt-6 flex flex-col gap-4">
      <h1 className="mt-11 text-[5vw] lg:text-4xl font-bold leading-[1.15] mb-6 underline">{title}</h1>
      <p className="text-xl lg:text-base">{subTitle}</p>
      <LastModified date={lastModified} />
    </div>
  );
};
