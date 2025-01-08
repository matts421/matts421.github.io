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
        <ul id={styles.education}>
          <li>
            <div>
              Bachelor of Computer Science
              <div className="data">
                <em>University of British Columbia</em>
              </div>
            </div>
            <span>2025</span>
          </li>
          <li>
            <div>
              Bachelor of Science in Honours Physics
              <div className="data">
                <em>University of British Columbia</em>
              </div>
            </div>
            <span>2023</span>
          </li>
        </ul>
      </section>
    </>
  );
}
