import { MDXRemote } from "next-mdx-remote/rsc";
import { getPosts, loadPost } from "@/lib/blog";
import { useMDXComponents } from "@/mdx-components";
import rehypeStarryNight from "rehype-starry-night";

function formatDate(dateStr) {
  const date = new Date(dateStr);
  const mths = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return `${mths[date.getMonth()]} ${date
    .getDate()
    .toFixed()
    .padStart(2, "0")}, ${date.getFullYear()}`;
}

export default async function Page({ params }) {
  const { slug } = await params;
  const post = await loadPost(slug);
  const formattedDate = formatDate(post.data.date);
  // const obj = await import(`@/../content/${slug}.mdx`);
  return (
    <>
      <section>
        <h1 style={{ marginBottom: 0 }}>{post.data.title}</h1>
        <em style={{ color: "var(--text-two)" }}>{formattedDate}</em>
      </section>
      <section>
        <MDXRemote
          source={post.content}
          components={useMDXComponents()}
          options={{ mdxOptions: { rehypePlugins: [rehypeStarryNight] } }}
        />
      </section>
    </>
  );
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts;
}

export const dynamicParams = false;
