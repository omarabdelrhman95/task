import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./header.module.css";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <nav className={styles.header}>
      <Link
        to="/"
        className={`${styles.link} ${pathname === "/" ? styles.active : ""}`}
      >
        Products
      </Link>
      <Link
        to="/comparing"
        className={`${styles.link} ${
          pathname === "/comparing" ? styles.active : ""
        }`}
      >
        Comparing
      </Link>
      <Link
        to="/facebook"
        className={`${styles.link} ${
          pathname === "/facebook" ? styles.active : ""
        }`}
      >
        Facebook
      </Link>
    </nav>
  );
};

export default Header;
