import React from "react";
import styles from "css/Skills.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
    return (
        <div id="2" className={styles.skills_wrap}>
            <h2>🔧 Skills</h2>
            <div className={styles.row}>
                <div className={styles.skill_title}>
                    <div>MarkUp</div>
                    <div>Language</div>
                    <div>Framework / Library</div>
                    <div>Database</div>
                    <div>Tool</div>
                </div>
                <div className={styles.column}>
                    <div className={styles.skills}>
                        <div>HTML</div>
                        <div>CSS</div>
                    </div>
                    <div className={styles.skills}>
                        <div>JS</div>
                        <div>Dart</div>
                    </div>
                    <div className={styles.skills}>
                        <div>React</div>
                        <div>Bootstrap</div>
                        <div>NodeJS</div>
                        <div>Flutter</div>
                    </div>
                    <div className={styles.skills}>
                        <div>MySQL</div>
                    </div>
                    <div className={styles.skills}>
                        <div>Github</div>
                        <div>Git</div>
                        <div>Figma</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
