import { Tabs } from "../Header/Tabs";
import ArrowSvg from "./ArrowSvg";
import styles from "./landing.module.css";

const Landing = () => {
  return (
    <div className={styles.landing}>
      <div className={styles.landingText}>
        <div>
          <h1>
            Getting You <span className={styles.landingRating}>4.9</span>
            <br />
            <img
              className={styles.landingText_img}
              src="https://img.freepik.com/free-photo/confident-bearded-man-with-dark-hair-has-serious-facial-expression-thinks-about-future-job-dressed-fashionable-shirt_273609-17204.jpg"
              alt=""
            />
            Where You <br /> Want to study.
            <span style={{ marginLeft: "18px" }}>
              <ArrowSvg />
            </span>
          </h1>
          <p>
            Everything you need to know for your study abroad journey: from
            first search to your first day on campus.
          </p>
        </div>
        <Tabs />
      </div>
      <div>
        <img
          src="https://i.ibb.co/Cs8sZzr/Full-Stack-Developer-Assignment1-cropped-page-0001.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Landing;
