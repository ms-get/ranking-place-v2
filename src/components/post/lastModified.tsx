import { getDateFormat } from "@/helpers/date";

interface IProps {
  date: string;
}

export const LastModified = ({ date }: IProps) => {
  const metaDate = getDateFormat(date);

  return <p className="text-[1rem] lg:text-sm">{metaDate}</p>;
};
