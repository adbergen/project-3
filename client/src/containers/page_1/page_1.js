import React from "react";

import styles from "./page_1.module.css";

import pic1 from "../../img/pic1.png";
import First from "../../components/Slides/FirstSlide";
import Last from "../../components/last/last";
import Mid from "../../components/mid/mid";
import PageOne from "../../components/page_1/page_1";

class Page1 extends React.Component {
  render() {
    return (
      <div className={styles.page_1}>
        <img src={pic1} alt="pic1" />
        <div className={styles.container}>
          <div className={styles.first}>
            <First />
          </div>
          <div className={styles.mid}>
            <Mid />
            <PageOne />
          </div>
          <div className={styles.last}>
            <Last />
          </div>
        </div>
      </div>
    );
  }
}

export default Page1;
