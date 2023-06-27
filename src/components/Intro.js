import React, { useRef, useEffect } from "react";
import styles from "css/Intro.module.css";
import { gsap } from "gsap";
import Svg from "components/Svg.js";

const Intro = () => {
    const appearBox = useRef();
    const appearText_1 = useRef();
    const appearText_2 = useRef();
    useEffect(() => {
        let tl = gsap.timeline(); //순서대로 gsap 사용하기
        // tl.from(appearBox.current, {
        //     y: -150, //y -150인 곳에서부터 시작
        //     duration: 0.5, //애니메이션 적용시간
        //     ease: "bounce.out", //튕기면서 마무리
        // });
        // tl.to(appearBox.current, {
        //     y: 0,
        //     rotation: 360, // 360도 회전
        //     duration: 1.3,
        //     scale: 1.5, //1.5배 커짐
        //     ease: "bounce.out",
        // });
        // tl.to(appearBox.current, {
        //     scale: 1, //다시 scale이 1로 줄어듦(원래 크기로)
        // });
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
    }, []);
    return (
        <div className={styles.intro_wrap}>
            {/* <Svg /> */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="450"
                version="1.0"
                viewBox="0 0 1595 1595"
                className={styles.svg}
                fill="none"
            >
                <path
                    d="M 1059 732 Q 831 886 586 905 T 506 686 Q 716 413 1114 311 T 1300 511 Q 1295 518 1284 530"
                    stroke="darkslateblue"
                    strokeWidth={1}
                />
                {/* <path
                    d="M1316.2 436.7c.4 3.4 3.2 4.2 4.8 1.3 1.4-2.6.5-4-2.6-4-2.2 0-2.5.4-2.2 2.7zM1297.3 457.7c-.7.3-1.3 1.4-1.3 2.4 0 1.6.6 2 2.7 1.7 1.4-.2 2.8-.8 3-1.5.5-1.4-2.7-3.2-4.4-2.6zM1260.7 500.7c-1.2 1.1-.8 3.1.8 3.7 2 .7 4.5-.3 4.5-1.9 0-1.9-3.9-3.2-5.3-1.8z"
                    stroke="black"
                    strokeWidth={1}
                /> */}
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
