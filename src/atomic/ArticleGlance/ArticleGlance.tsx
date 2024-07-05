import { FC } from "react";
import styles from "./articleGlance.module.scss";

export interface ArticleGlanceProps {
  imgUrl: string;
  number: number;
  heading: string;
  text: string;
}

const ArticleGlance: FC<ArticleGlanceProps> = ({
  imgUrl,
  number,
  heading,
  text,
}) => {
  return (
    <div className={styles.articleGlanceContainer}>
      <img src={imgUrl} alt="" />
      <div className={styles.infoContainer}>
        <h1>{number <= 9 ? `0${number}` : number}</h1>
        <h2>{heading}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ArticleGlance;
