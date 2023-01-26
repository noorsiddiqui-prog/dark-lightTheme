import React from "react";
import Card from "../../Components/Card/Card";
import styles from "./Home.module.sass";
export default function Home() {
  return (
    <>
      <div className={styles.background}>
        <Card />
      </div>
    </>
  );
}
