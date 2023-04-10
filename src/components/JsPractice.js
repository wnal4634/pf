import React from "react";
import styles from "css/JsPractice.module.css";

const jsPractice = () => {
    return (
        <div id="3" className={styles.practice_wrap}>
            <h2>js 작업물</h2>
            <div className={styles.column}>
                <div className={styles.row_1}>
                    <div className={styles.row}>1</div>
                    <div className={styles.row}>2</div>
                </div>
                <div className={styles.row_2}>
                    <div className={styles.row}>3</div>
                    <div className={styles.row}>4</div>
                </div>
            </div>
        </div>
    );
};

export default jsPractice;
