import React from "react";
import styles from "css/Skills.module.css";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import styled from "styled-components";
import {
    SiJavascript,
    SiBootstrap,
    SiHtml5,
    SiCss3,
    SiReact,
    SiFirebase,
    SiGit,
    SiGithub,
    SiFigma,
    SiTypescript,
    SiTailwindcss,
} from "react-icons/si";

// const Button = styled.div`
//     transition: ease 0.3s;
//     :hover {
//         transition: ease 0.3s;
//         transform: translateY(-20px);
//     }
// `;

const Skills = () => {
    return (
        <div id="2" className={styles.skills_wrap}>
            <h2>skills</h2>
            <div className={styles.row}>
                <Fade bottom>
                    <div className={styles.column}>
                        <div class={styles.wave} />
                        <div class={`${styles.wave} ${styles.wave_layer_1}`} />
                        <div class={`${styles.wave} ${styles.wave_layer_2}`} />
                        <div>Frontend</div>
                        <div>
                            <SiHtml5 size={50} />
                            HTML
                        </div>
                        <div>
                            <SiCss3 size={50} />
                            CSS
                        </div>
                        <div>
                            <SiJavascript size={50} />
                            JS
                        </div>
                        <div>
                            <SiReact size={50} />
                            React
                        </div>
                        <div>
                            <SiBootstrap size={50} />
                            Bootstrap
                        </div>
                        <div>
                            <SiTypescript size={50} />
                            ts
                        </div>
                        <div>
                            <SiTailwindcss size={50} />
                            tailwind css
                        </div>
                    </div>
                </Fade>
                <Fade bottom duration={1500}>
                    <div className={styles.column}>
                        <div class={styles.wave} />
                        <div class={`${styles.wave} ${styles.wave_layer_1}`} />
                        <div class={`${styles.wave} ${styles.wave_layer_2}`} />
                        <div>Backend</div>
                        <div>
                            <SiFirebase size={50} />
                            Firebase
                        </div>
                    </div>
                </Fade>
                <Fade bottom duration={2000}>
                    <div className={styles.column}>
                        <div class={styles.wave} />
                        <div class={`${styles.wave} ${styles.wave_layer_1}`} />
                        <div class={`${styles.wave} ${styles.wave_layer_2}`} />
                        <div>Version Control</div>
                        <div>
                            <SiGit size={50} />
                            Git
                        </div>
                        <div>
                            <SiGithub size={50} />
                            Github
                        </div>
                    </div>
                </Fade>
                <Fade bottom duration={2500}>
                    <div className={styles.column}>
                        <div class={styles.wave} />
                        <div class={`${styles.wave} ${styles.wave_layer_2}`} />
                        <div class={`${styles.wave} ${styles.wave_layer_1}`} />
                        <div>Communication</div>
                        <div>
                            <SiFigma size={50} />
                            Figma
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default Skills;
