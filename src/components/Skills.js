import React from "react";
import styles from "css/Skills.module.css";

const Skills = () => {
    return (
        <div id="2" className={styles.skills_wrap}>
            <h2>skills</h2>
            <div className={styles.row}>
                <div className={styles.column}>
                    frontend: <br />
                    html, css, js, ts, react, bootstrap, tailwind css
                </div>
                <div className={styles.column}>
                    backend: <br />
                    firebase
                </div>
                <div className={styles.column}>
                    version control: <br />
                    git, github
                </div>
                <div className={styles.column}>
                    communication: <br />
                    figma
                </div>
            </div>
        </div>
    );
};

export default Skills;
