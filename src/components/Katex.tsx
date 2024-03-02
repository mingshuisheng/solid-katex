//@ts-ignore
import katex from "katex";
import "katex/dist/katex.css";

export interface KatexProps {
  value: string;
}

export const Katex = (props: KatexProps) => {
  const html = () => katex.renderToString(props.value.trim());
  return <div innerHTML={html()} />;
};
