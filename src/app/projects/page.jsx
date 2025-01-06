import styles from "@/app/ui/projects.module.css";
import projects from "@/data/projects.json";

const ProjectList = () => {
  return (
    <div style={{ width: "95%", margin: "auto" }}>
      <div className={styles.grid}>
        {projects.map((project, idx) => (
          <div key={`project-${idx}`} className={styles.project}>
            <a href={project.link} target="_blank">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                {project.name}
                <span className="material-symbols-outlined">arrow_outward</span>
              </div>
            </a>

            <p>{project.desc}</p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <em>{project.tech.join(" • ").toLocaleLowerCase()}</em>
              <em>{project.time.join(" • ")}</em>
            </div>
          </div>
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
      <p>♥ personal favourites</p>
    </>
  );
};

export default Projects;
