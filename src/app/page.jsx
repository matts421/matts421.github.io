import { JobIntro, JobList } from "@/components/Work";
import styles from "@/app/ui/home.module.css";

const sectionTitle = (title) => {
  return <h2>{title}</h2>;
};

export default function Home() {
  return (
    <>
      <section>
        <h1 style={{ marginBottom: 0 }}>Matthew Smith</h1>
        <JobIntro />
        <p>
          I'm a senior CS student at UBC. I have a background in physics,
          machine learning, and software engineering. I love learning new
          things, solving problems, and building quality software.
        </p>
      </section>
      <section>
        {sectionTitle("Experience")}
        <JobList />
      </section>
      <section>
        {sectionTitle("Education")}
        <ul style={{ listStyleType: "none" }}>
          <li className={styles["edu-item"]}>
            <div className={styles["degree-stack"]}>
              Bachelor of Computer Science
              <div className="data">
                <em className={styles["school-name"]}>
                  University of British Columbia
                </em>
              </div>
            </div>
            <span className={styles.date}>2025</span>
          </li>
          <li className={styles["edu-item"]}>
            <div className={styles["degree-stack"]}>
              Bachelor of Science in Honours Physics
              <div className="data">
                <em className={styles["school-name"]}>
                  University of British Columbia
                </em>
              </div>
            </div>
            <span className={styles.date}>2023</span>
          </li>
        </ul>
      </section>
    </>
  );
}
