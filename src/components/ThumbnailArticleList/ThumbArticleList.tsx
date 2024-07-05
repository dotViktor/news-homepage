import { FC } from "react";
import styles from "./thumbArticleList.module.scss";
import ArticleGlance from "../../atomic/ArticleGlance/ArticleGlance";
import articles from "../../articles";

interface ThumbArticleListProps {}

const ThumbArticleList: FC<ThumbArticleListProps> = () => {
  return (
    <div className={styles.thumbArticleListContainer}>
      {articles.map((article) => (
        <ArticleGlance
          key={article.number}
          imgUrl={article.imgUrl}
          number={article.number}
          heading={article.heading}
          text={article.text}
        />
      ))}
    </div>
  );
};

export default ThumbArticleList;
