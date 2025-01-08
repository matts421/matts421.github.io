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
              <li key={`blog-${idx}`}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  <div style={{ minWidth: "4rem", paddingLeft: "1rem" }}>
                    <em>{post.date.substring(0, 5)}</em>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
