import { FC } from "react";
import styles from "./mainSectionContainer.module.scss";

interface MainSectionContainerProps {
  children: React.ReactNode;
}

const MainSectionContainer: FC<MainSectionContainerProps> = ({ children }) => {
  return <div className={styles.mainSectionContainer}>{children}</div>;
};

export default MainSectionContainer;
