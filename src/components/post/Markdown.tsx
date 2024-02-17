import LibMarkdown from "react-markdown";
import "github-markdown-css/github-markdown-light.css";

interface IProps {
  content: string;
}

export const Markdown = ({ content }: IProps) => {
  return (
    <div className="markdown-body">
      <LibMarkdown>{content}</LibMarkdown>
    </div>
  );
};
