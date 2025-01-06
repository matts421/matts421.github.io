import getPosts from "@/lib/blog";

export default async function Page({ params }) {
  const { slug } = await params;
  const { default: Post } = await import(`@/../content/${slug}.mdx`);

  return <Post />;
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts;
}

export const dynamicParams = false;
