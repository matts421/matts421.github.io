import work from "@/data/work.json";
import styles from "@/app/ui/home.module.css";

export const JobList = () => {
  const jobs = work.jobs;

  return (
    <ul className={styles["job-list"]}>
      {jobs.map((job, idx) => (
        <li key={`work-${idx}`} className={styles.job}>
          {job.name}
          <br />
          <em className={styles["job-role"]}>
            {job.role} • {job.time.join(" - ")}
          </em>
          <div></div>
          <div className="data">
            <p className={styles["job-desc"]}>{job.desc}</p>
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
    ? curr.role
    : "Seeking roles in " + work.roles.join(", ");

  const currCompanyContent = employed ? (
    <>
      {" "}
      Currently at{" "}
      <a href={curr.link} target="_blank">
        {curr.name}
      </a>
      .
    </>
  ) : (
    ""
  );

  return (
    <>
      <div id={styles.intro}>{content}</div>
      <p>I love learning and building new things.{currCompanyContent}</p>
    </>
  );
};
