import React from "react";
import styles from "css/Url.module.css";

const Prize = () => {
    const githubUrl = "https://github.com/wnal4634";
    const email = "";
    const blogUrl = "https://wnal4634.tistory.com/";
    return (
        <div id="4" className={styles.url_wrap}>
            <h2>Archiving</h2>
            <div className={styles.row}>
                <div className={styles.column}>
                    <button
                        onClick={() => {
                            window.open(githubUrl);
                        }}
                    >
                        Github
                    </button>
                    설명
                </div>
                <div className={styles.column}>
                    <button>Email</button>설명
                </div>
                <div className={styles.column}>
                    <button
                        onClick={() => {
                            window.open(blogUrl);
                        }}
                    >
                        Blog
                    </button>
                    설명
                </div>
            </div>
        </div>
    );
};

export default Prize;
