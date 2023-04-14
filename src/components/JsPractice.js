import React from "react";
import styles from "css/JsPractice.module.css";
import Fade from "react-reveal/Fade";

const jsPractice = () => {
    const jsUrl_1 = "https://wnal4634.github.io/momentum/";

    return (
        <div id="3" className={styles.practice_wrap}>
            <h2>js 작업물</h2>
            <div className={styles.column}>
                <div className={styles.row_1}>
                    <Fade bottom>
                        <div className={styles.row}>
                            <button
                                onClick={() => {
                                    window.open(jsUrl_1);
                                }}
                            >
                                Blog
                            </button>
                        </div>
                    </Fade>
                    <Fade bottom duration={1500}>
                        <div className={styles.row}>
                            <button
                                onClick={() => {
                                    window.open(jsUrl_1);
                                }}
                            >
                                Blog
                            </button>
                        </div>
                    </Fade>
                </div>
                <div className={styles.row_2}>
                    <Fade bottom duration={1500}>
                        <div className={styles.row}>
                            <button
                                onClick={() => {
                                    window.open(jsUrl_1);
                                }}
                            >
                                Blog
                            </button>
                        </div>
                    </Fade>
                    <Fade bottom duration={2000}>
                        <div className={styles.row}>
                            <button
                                onClick={() => {
                                    window.open(jsUrl_1);
                                }}
                            >
                                Blog
                            </button>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default jsPractice;
