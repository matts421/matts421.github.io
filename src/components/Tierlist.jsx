"use client";
import styles from "@/app/ui/blog.module.css";

export function Tierlist({ ranks: ranks }) {
  return (
    <>
      {Object.keys(ranks).map((rank, rIdx) => {
        return (
          <div key={`rank-${rIdx}`} style={{ display: "flex", gap: "1rem" }}>
            <h2 style={{ padding: 0, margin: 0 }}>{rank}</h2>
            <ul
              style={{
                display: "flex",
                flexWrap: "wrap",
                listStyle: "none",
                gap: "0.25rem 0.5rem",
                paddingBottom: "1rem",
              }}
            >
              {ranks[rank].map((item, iIdx) => (
                <li key={`rank-${rIdx}-${iIdx}`} className={styles.tag}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </>
  );
}
