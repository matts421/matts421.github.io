import Link from "next/link";

const art = `██╗  ██╗ ██████╗ ██╗  ██╗
██║  ██║██╔═████╗██║  ██║
███████║██║██╔██║███████║
╚════██║████╔╝██║╚════██║
     ██║╚██████╔╝     ██║
     ╚═╝ ╚═════╝      ╚═╝`;

export default function NotFound() {
  return (
    <div style={{ margin: "5rem 0" }}>
      <section>
        <h1
          style={{
            textAlign: "center",
            color: "var(--secondary)",
            whiteSpace: "pre-wrap",
            fontFamily: "monospace",
          }}
        >
          {art}
        </h1>
      </section>
      <section style={{ textAlign: "center" }}>
        <h2>It looks like you've made a wrong turn</h2>
        <Link href="/">Take me home</Link>
      </section>
    </div>
  );
}
