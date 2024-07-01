import React, { FC } from "react";
import styles from "./NavBar.module.scss";
import Logo from "../../assets/images/logo.svg?react";
import IconMenu from "../../assets/images/icon-menu.svg?react";
import IconMenuClose from "../../assets/images/icon-menu-close.svg?react";

interface NavBarProps {}

export const NavBar: FC<NavBarProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const onMenuIconClick = () => {
    setIsMenuOpen((isMenuOpen) => !isMenuOpen);
  };

  const iconMenuProps: React.SVGProps<SVGSVGElement> = {
    className: styles.menuButton,
    onClick: onMenuIconClick,
  };

  return (
    <div className={styles.navBarContainer}>
      <Logo />
      {isMenuOpen ? (
        <IconMenuClose {...iconMenuProps} />
      ) : (
        <IconMenu {...iconMenuProps} />
      )}
      {isMenuOpen && <div className={styles.overlay}></div>}
      <ul
        className={`${styles.navLinksContainer} ${
          isMenuOpen ? "" : styles.closedMenu
        }`}
      >
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
