import work from "@/data/work.json";
import styles from "@/app/ui/home.module.css";

export const JobList = () => {
  const jobs = work.jobs;

  return (
    <ul className={styles["job-list"]}>
      {jobs.map((job, idx) => (
        <li key={`work-${idx}`}>
          <a href={job.link} target="_blank">
            {job.name}
          </a>
          <div>
            <em>
              {job.role} • {job.time.join(" - ")}
            </em>
          </div>
          <div className="data">
            <p>{job.desc}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export const JobIntro = () => {
  const employed = work.employed;
  const curr = work.jobs[0];

  const content = employed
    ? curr.role + " @ " + curr.name
    : "Seeking roles in " + work.roles.join(", ");

  return <div id={styles.intro}>{content}</div>;
};
