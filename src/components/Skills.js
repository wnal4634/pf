import React from "react";
import styles from "css/Skills.module.css";
import { Fade } from "react-reveal";
import colors from "components/SkillsColor";

const Skills = () => {
    return (
        <>
            <Fade bottom>
                <div id="2" className={styles.skills_wrap}>
                    <h2>Skills</h2>
                    <hr />
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
                                <div style={{ color: colors.HTML }}>HTML</div>
                                <div style={{ color: colors.CSS }}>CSS</div>
                            </div>
                            <div className={styles.skills}>
                                <div style={{ color: colors.JS }}>JS</div>
                                <div style={{ color: colors.Dart }}>Dart</div>
                            </div>
                            <div className={styles.skills}>
                                <div style={{ color: colors.React }}>React</div>
                                <div style={{ color: colors.Bootstrap }}>
                                    Bootstrap
                                </div>
                                {/* <div style={{ color: colors.NodeJS }}>
                                    NodeJS
                                </div> */}
                                <div style={{ color: colors.Flutter }}>
                                    Flutter
                                </div>
                            </div>
                            <div className={styles.skills}>
                                <div style={{ color: colors.MySQL }}>MySQL</div>
                            </div>
                            <div className={styles.skills}>
                                <div style={{ color: colors.Github }}>
                                    Github
                                </div>
                                <div style={{ color: colors.Git }}>Git</div>
                                <div style={{ color: colors.Figma }}>Figma</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </>
    );
};

export default Skills;
