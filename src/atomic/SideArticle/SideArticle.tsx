import React, { FC } from "react";
import styles from "./sideArticle.module.scss";

interface SideArticleProps {
  title: string;
  text: string;
  seperator?: boolean;
}

const SideArticle: FC<SideArticleProps> = ({ title, text, seperator }) => {
  return (
    <div className={styles.sideArticleContainer}>
      <h3 className={styles.articleTitle}>{title}</h3>
      <p>{text}</p>
      {seperator && <div className={styles.articleSeperator} />}
    </div>
  );
};

export default SideArticle;
