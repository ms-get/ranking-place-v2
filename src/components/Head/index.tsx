import Head from "next/head";
import { usePathname } from "next/navigation";
import { StringifyOptions } from "querystring";

interface IProps {
  keyword: string;
  description: string;
  image: string;
  title: string;
  subject: string;
  lastModified: string;
}

export const NextHead = ({ keyword, description, image, title, subject, lastModified }: IProps) => {
  const pathname = usePathname();
  const pathnameSplitSlash = usePathname().split("/");
  const excludedEnPathname = pathnameSplitSlash[pathnameSplitSlash.length - 1];

  return (
    <Head>
      {/* <meta name="keywords" content={keyword} /> */}
      <meta name="description" content={description} />
      <title>{title}</title>
      <meta name="og:title" content={title} />
      <meta http-equiv="Subject" content={subject} />
      <meta property="og:site_name" content="rankingPlace" />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`http://www.ranking-place.com${pathname}`} />
      <meta property="og:image" content={image} />
      <meta name="robots" content="max-image-preview:standard"></meta>
      <meta name="date" content={lastModified} />
      <meta property="article:modified_time" content={lastModified} />
      <link rel="canonical" href={`https://ranking-place.com${pathname}`} />
      <link rel="alternate" hrefLang="en" href={`https://ranking-place.com/en/${excludedEnPathname}`} />
    </Head>
  );
};
