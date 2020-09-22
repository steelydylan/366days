import { Entry } from "@/types/";
import { renderToString } from "react-dom/server";

export const getPosts = (): Entry[] => {
  // Get posts from folder
  const entries = ((ctx: any) => {
    const keys = ctx.keys();
    const values = keys.map(ctx);
    const data = keys.map((key, index) => {
      // Create slug from filename
      const paths = key.split("/");
      // paths.pop();
      const slug = paths.pop().replace(/\.mdx/, "");
      const { default: Content, ...extra } = values[index];
      // Parse document
      const html = renderToString(<Content />);
      const rex = /<img[^>]+src="?([^"\s]+)"?\s*\/>/g;
      const images = [];
      const matches = html.match(rex);
      if (matches) {
        matches.forEach(m => {
          const path = rex.exec(m);
          if (path) {
            images.push(path[1]);
          }
        });
      }
      return {
        content: Content,
        data: { ...extra, images },
        slug
      };
    });
    return data;
    // @ts-ignore
  })(require.context("@/contents", true, /\.mdx$/));
  return entries;
};
