import { readdir } from "fs/promises";
import path from "path";

async function getPosts() {
  const dir = path.join(process.cwd(), "content");
  const files = (await readdir(dir)).filter((file) => file.endsWith(".mdx"));
  return files.map((name) => {
    return { slug: path.basename(name, ".mdx") };
  });
}

export default getPosts;
