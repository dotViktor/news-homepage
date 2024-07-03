import { FC } from "react";
import styles from "./orangeButton.module.scss";

interface OrangeButtonProps {}

const OrangeButton: FC<OrangeButtonProps> = () => {
  return <button className={styles.orangeButton}>READ MORE</button>;
};

export default OrangeButton;
