import { FC } from "react";
import styles from "./MainPage.module.scss";
import { NavBar } from "../../components/NavBar/NavBar";
import HeroSection from "../../components/HeroSection/HeroSection";
import MainSectionContainer from "../../atomic/MainSectionContainer/MainSectionContainer";
import ArticlesSidebar from "../../components/ArticlesSidebar/ArticlesSidebar";

interface MainPageProps {}

export const MainPage: FC<MainPageProps> = () => {
  return (
    <div className={styles.mainPageContainer}>
      <NavBar />
      <MainSectionContainer>
        <HeroSection />
        <ArticlesSidebar />
      </MainSectionContainer>
    </div>
  );
};
