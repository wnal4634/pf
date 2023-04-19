import React, { useRef, useEffect } from "react";
import styles from "css/Intro.module.css";
import { gsap } from "gsap";

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
            <div className={styles.bg} ref={appearBox} />
            <div className={styles.text}>
                <div ref={appearText_1}>Towards the Future</div>
                <div ref={appearText_2}>Make a Record</div>
            </div>
        </div>
    );
};

export default Intro;
