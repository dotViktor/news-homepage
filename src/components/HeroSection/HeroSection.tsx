import { FC } from "react";
import styles from "./heroSection.module.scss";
import HeroImage from "../../assets/images/image-web-3-desktop.jpg";

interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroImageContainer}>
        <img src={HeroImage} alt="" />
      </div>
      <div className={styles.callToAction}>
        <h1>The Bright Future of Web 3.0?</h1>
      </div>
      <div className={styles.heroDetails}>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa esse,
          sint impedit veniam eum necessitatibus consequatur, quam maxime
          blanditiis dolore unde, est ad dicta vitae harum nostrum molestias
          officiis eligendi?
        </p>
        <button>Read More</button>
      </div>
    </div>
  );
};

export default HeroSection;
