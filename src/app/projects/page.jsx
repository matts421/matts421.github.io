import styles from "@/app/ui/projects.module.css";
import projects from "@/data/projects.json";

const ProjectList = () => {
  return (
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
  );
};

const Projects = () => {
  return (
    <>
      <section>
        <h1>Projects</h1>
        <p>Some passion projects I've worked on over the years.</p>
      </section>
      <div className="data">
        <ProjectList />
      </div>
    </>
  );
};

export default Projects;
