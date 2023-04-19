import React, { useRef, useEffect } from "react";
import styles from "css/Skills.module.css";
import Fade from "react-reveal/Fade";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
    useEffect(() => {
        gsap.from(`.${styles.column}`, {
            scrollTrigger: {
                trigger: `.${styles.column}`,
                start: "0% 30%", //시작 지점
                end: "100% 80%", //끝 지점
                // end: "+=500"//시작 부분부터 500px까지 스크롤 한 후종료
                scrub: 1, //부드러운 스크러빙
                markers: true, //개발가이드선
            },
            y: 20,
            opacity: 0,
        });
    }, []);
    return (
        <div id="2" className={styles.skills_wrap}>
            <h2>skills</h2>
            <div className={styles.row}>
                <div className={styles.column}>
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
                <div className={styles.column}>
                    {/* <div class={styles.wave} />
                    <div class={`${styles.wave} ${styles.wave_layer_1}`} />
                    <div class={`${styles.wave} ${styles.wave_layer_2}`} /> */}
                    <div>Backend</div>
                    <div>
                        <SiFirebase size={50} />
                        Firebase
                    </div>
                </div>
                <div className={styles.column}>
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
                <div className={styles.column}>
                    <div>Communication</div>
                    <div>
                        <SiFigma size={50} />
                        Figma
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
