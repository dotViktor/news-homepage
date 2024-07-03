import { FC } from "react";
import styles from "./articlesSidebar.module.scss";
import SideArticle from "../../atomic/SideArticle/SideArticle";

interface ArticlesSidebarProps {}

export const ArticlesSidebar: FC<ArticlesSidebarProps> = () => {
  return (
    <div className={styles.articlesSidebarContainer}>
      <h1>New</h1>
      <SideArticle
        title="Hydrogen VS Electric Cars"
        text="Will hydrogen cars ever catch up to EVs?"
        seperator
      />
      <SideArticle
        title="The Downsodes of AI Artistry"
        text="What are the possible adverse effects of on-demand AI image generation?"
        seperator
      />
      <SideArticle
        title="Is VC Funding Drying Up?"
        text="Private Funding by VC firms is down 50% YOY, We take a look at what that means."
      />
    </div>
  );
};

export default ArticlesSidebar;
