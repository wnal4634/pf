import React, { useRef, useEffect } from "react";
import styles from "css/Intro.module.css";
import { gsap } from "gsap";
import Fade from "react-reveal/Fade";

const Intro = () => {
    const appearBox = useRef();
    const appearText_1 = useRef();
    const appearText_2 = useRef();
    const appearSvg = useRef();
    useEffect(() => {
        let tl = gsap.timeline(); //순서대로 gsap 사용하기
        tl.from(appearBox.current, {
            y: -20,
            opacity: 0,
            duration: 1,
        });
        gsap.from(appearText_1.current, {
            x: -20,
            opacity: 0,
            duration: 1,
            delay: 1,
        });
        gsap.from(appearText_2.current, {
            x: 20,
            opacity: 0,
            duration: 1,
            delay: 1,
        });
        gsap.from(appearSvg.current, {
            opacity: 0,
            duration: 1,
            delay: 1.5,
        });
    }, []);
    return (
        <div className={styles.intro_wrap}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="450"
                version="1.0"
                viewBox="0 0 1595 1595"
                className={styles.svg}
                fill="none"
                ref={appearSvg}
            >
                <path
                    d="M 1059 732 Q 831 886 586 905 T 506 686 Q 716 413 1114 311 T 1300 511 Q 1295 518 1284 530"
                    stroke="darkslateblue"
                    strokeWidth={1}
                />
                <path
                    d="M 1270 544 L 1267 547 "
                    stroke="black"
                    strokeWidth={1}
                />
                <path
                    d="M 1253 560 L 1250 563"
                    stroke="black"
                    strokeWidth={1}
                />
                {/* 점 path length: 50.977 */}
            </svg>
            <div className={styles.bg} ref={appearBox} />
            <div className={styles.text}>
                <div ref={appearText_1}>Towards the Future</div>
                <div ref={appearText_2}>Make a Record</div>
            </div>
        </div>
    );
};

export default Intro;
