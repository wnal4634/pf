import React from "react";
import styles from "css/Skills.module.css";
import Fade from "react-reveal/Fade";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
    // useEffect(() => {
    //     gsap.from(`.${styles.column}`, {
    //         scrollTrigger: {
    //             trigger: `.${styles.column}`,
    //             start: "0% 30%", //시작 지점
    //             end: "100% 80%", //끝 지점
    //             // end: "+=500"//시작 부분부터 500px까지 스크롤 한 후종료
    //             scrub: 1, //부드러운 스크러빙
    //             markers: true, //개발가이드선
    //         },
    //         y: 20,
    //         opacity: 0,
    //     });
    // }, []);
    return (
        <div id="2" className={styles.skills_wrap}>
            <h2>🔧 Skills</h2>
            <div className={styles.row}>
                <Fade bottom>
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
                </Fade>
            </div>
        </div>
    );
};

export default Skills;
