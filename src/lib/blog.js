import { readdir, readFile } from "fs/promises";
import matter from "gray-matter";
import path from "path";

const dir = path.join(process.cwd(), "content");

async function loadFiles() {
  return (await readdir(dir)).filter((file) => file.endsWith(".mdx"));
}

export async function getPosts() {
  const names = await loadFiles();
  return names.map((name) => {
    return { slug: path.basename(name, ".mdx") };
  });
}

export async function loadMetadata() {
  const names = await loadFiles();
  const files = await Promise.all(
    names.map((name) => readFile(path.join(dir, name))),
  );
  return files
    .map((file) => matter(file).data)
    .filter((data) => !data.hidden)
    .sort((f1, f2) => {
      const d1 = new Date(f1.date);
      const d2 = new Date(f2.date);
      return d2 - d1;
    });
}

export async function loadPost(slug) {
  const file = await readFile(path.join(dir, slug + ".mdx"));
  return matter(file);
}
