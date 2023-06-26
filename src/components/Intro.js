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
                width="300"
                version="1.0"
                viewBox="0 0 1595 1595"
                className={styles.svg}
                fill="none"
            >
                <path
                    d="M1289 118.7c-50.6 2.9-118.9 22.5-194 55.5-43 18.9-105.4 51.8-155 81.6-202.4 121.7-412.9 303.8-553.3 478.7-124.4 154.9-179.8 285.1-151.3 355.7 3.6 8.8 8.4 16.3 15.4 23.9 35.1 38 111.4 39.9 215.9 5.4 162.7-53.8 377.8-190.8 566.5-360.8 27.4-24.7 33.4-30.4 32.7-31.1-.3-.3-9.5 7.6-20.5 17.5-281.2 255.6-602.7 424.4-745.9 391.7-36.4-8.3-58.8-30.2-66.2-64.8-2.3-11.2-2.3-37.2.1-51.4 12.7-75.3 66.8-174 155.7-284.6 190.6-237.1 500.6-477.4 739.8-573.5 104-41.7 187.6-52.6 234.9-30.4 24.1 11.2 38.2 28.6 44.8 54.9 2.4 10 3 35.9 1 50.1-6.3 45.2-27.7 97.2-66.3 161.2-11 18.4-12.2 20.7-10.4 20.7 2.5 0 23.9-36.9 39.5-68 22-43.9 34.3-79.5 39.2-113 1.2-8.7 1.5-15.7 1.1-28.5-.6-20.5-2.3-28.3-9.8-43.5-4.5-9-6.4-11.7-13.8-19-4.8-4.7-11.2-10-14.3-11.8-21.9-12.9-51.2-18.5-85.8-16.5z"
                    stroke="black"
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
