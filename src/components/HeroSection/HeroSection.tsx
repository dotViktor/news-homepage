import { FC } from "react";
import styles from "./heroSection.module.scss";
import HeroImage from "../../assets/images/image-web-3-desktop.jpg";
import HeroImageMobile from "../../assets/images/image-web-3-mobile.jpg";
import OrangeButton from "../../atomic/OrangeButton/OrangeButton";
import { useMediaQuery } from "react-responsive";

interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = () => {
  const isCloseToMobile = useMediaQuery({ query: "(max-width: 1020px)" });

  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroImageContainer}>
        <img
          src={isCloseToMobile ? HeroImageMobile : HeroImage}
          alt="Abstract blocks"
        />
      </div>
      <div className={styles.callToAction}>
        <h1>The Bright Future of Web 3.0?</h1>
      </div>
      <div className={styles.heroDetails}>
        <p>
          We dive into the next evolution of the web that claims to put power of
          the platforms back into the hands of the people. But is it really
          fulfilling its promise?
        </p>
        <OrangeButton />
      </div>
    </div>
  );
};

export default HeroSection;
