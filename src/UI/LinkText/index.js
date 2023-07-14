import React from "react";
import { Link } from "react-router-dom";
import styles from "./linktext.module.css";

function LinkText({title, path, children}) {
  return (
  <div className={styles.container}>
    <Link className={styles.link} to={path}>{title}</Link>
    <p className={styles.description}>{children}</p>
    
    </div>)
}

export default LinkText;
