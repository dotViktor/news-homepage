import React, { FC } from "react";
import styles from "./NavBar.module.scss";
import Logo from "../../assets/images/logo.svg?react";

interface NavBarProps {}

export const NavBar: FC<NavBarProps> = ({}) => {
  return (
    <div className={styles.navBarContainer}>
      <Logo />
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">New</a>
        </li>
        <li>
          <a href="#">Popular</a>
        </li>
        <li>
          <a href="#">Trending</a>
        </li>
        <li>
          <a href="#">Categories</a>
        </li>
      </ul>
    </div>
  );
};
