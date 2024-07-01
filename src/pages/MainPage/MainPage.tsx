import { FC } from "react";
import styles from "./MainPage.module.scss";
import { NavBar } from "../../components/NavBar/NavBar";

interface MainPageProps {}

export const MainPage: FC<MainPageProps> = () => {
  return (
    <div className={styles.mainPageContainer}>
      <NavBar />
    </div>
  );
};
