import { loadMetadata } from "@/lib/blog";
import Link from "next/link";
import styles from "@/app/ui/blog.module.css";

export default async function Blog() {
  const posts = await loadMetadata();
  return (
    <>
      <section>
        <h1>Blog</h1>
        <div className="data">
          <ul className={styles["blog-entries"]}>
            {posts.map((post, idx) => (
              <li
                key={`blog-${idx}`}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Link href={`/blog/${post.slug}`} style={{ maxWidth: "80%" }}>
                  {post.title}
                </Link>
                <div>{post.date.substring(0, 5)}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
