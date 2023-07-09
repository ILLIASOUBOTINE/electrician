import React, { useState } from "react";
import styles from "./spine.module.css";
import { Spin } from "antd";
import { useSelector } from "react-redux";

function SpinLoading() {
  // const [isLoading, setIsloading] = useState(false);
  const isLoading = useSelector((state) => state.loading.isLoading);

  return (
    <>
      {isLoading && (
        <div className={styles.container}>
          <Spin size="large" />
          <span className={styles.text}>Loading...</span>
        </div>
      )}
    </>
  );
}

export default SpinLoading;
