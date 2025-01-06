import getPostNames from "@/lib/blog";
import Link from "next/link";

export default async function Blog() {
  const posts = await getPostNames();
  return (
    <>
      <section>
        <h1>Blog</h1>
        <div className="data">
          <ul>
            {posts.map((post, idx) => (
              <li key={`blog-${idx}`}>
                <Link href={`/blog/${post.slug}`}>{post.slug}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
