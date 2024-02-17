import LibMarkdown from "react-markdown";
import "github-markdown-css/github-markdown-light.css";

interface IProps {
  content: string;
}

export const Markdown = ({ content }: IProps) => {
  return (
    <section className="max-w-[800px] px-4 w-full mb-10 whitespace-pre-wrap markdown-body">
      <LibMarkdown>{content}</LibMarkdown>
    </section>
  );
};
