import { posts } from "@/constants/posts";
import { Lang } from "./lang";
import { enPosts } from "@/constants/enPosts";

export const generateMetadataImpl =
  (lang: Lang, allPosts: typeof posts | typeof enPosts) =>
  async ({ params }: { params: { id: string } }) => {
    const { id } = params;
    const post = allPosts.find((post) => post.id === id);

    if (!post) return {};

    const { title, description, image } = post;

    const URL = `https://ranking-place.com/${lang === "ko" ? "" : lang}${id}`;

    return {
      title: title,
      description: description,
      alternates: {
        canonical: URL,
      },
      openGraph: {
        images: image,
        description,
        title,
        siteName: "rankingPlace",
        url: URL,
      },
    };
  };
