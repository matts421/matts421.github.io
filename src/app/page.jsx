import { JobIntro, JobList } from "@/components/Work";
import styles from "@/app/ui/home.module.css";
import projects from "@/data/projects.json";

const Projects = () => {
  return (
    <div className="data">
      <div style={{ width: "95%", margin: "auto" }}>
        <div className={styles.grid}>
          {projects.map((project, idx) => (
            <a key={`project-${idx}`} href={project.link} target="_blank">
              <div className={styles.project}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  {project.name}
                </div>

                <p className={styles.text}>{project.desc}</p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <em className={styles.ital}>
                    {project.tech.join(" • ").toLocaleLowerCase()}
                  </em>
                  <em className={styles.ital}>{project.time.join(" • ")}</em>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <>
      <section>
        <h1 style={{ marginBottom: 0 }}>Matthew Smith</h1>
        <JobIntro />
      </section>
      <section>
        <Projects />
      </section>
    </>
  );
}
