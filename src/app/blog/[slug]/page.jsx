import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { getPosts, loadPost } from "@/lib/blog";

export default async function Page({ params }) {
  const { slug } = await params;
  const post = await loadPost(slug);
  // const obj = await import(`@/../content/${slug}.mdx`);
  return (
    <>
      <Link href="/blog">← Take me home</Link>
      <h1>{post.data.title}</h1>
      <MDXRemote source={post.content} />
    </>
  );
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts;
}

export const dynamicParams = false;
