import React from "react";
import styles from "css/Intro.module.css";
import { gsap } from "gsap";
import Fade from "react-reveal/Fade";
import Spin from "react-reveal/Spin";
import star from "img/star.png";
import { useRef, useEffect } from "react";

const Intro = () => {
    const appearBox = useRef();
    const appearText = useRef();
    useEffect(() => {
        let tl = gsap.timeline(); //순서대로 gsap 사용하기
        tl.from(appearBox.current, {
            y: -150, //y -150인 곳에서부터 시작
            duration: 0.5, //애니메이션 적용시간
            ease: "bounce.out", //튕기면서 마무리
        });
        tl.to(appearBox.current, {
            y: 0,
            rotation: 360, // 360도 회전
            duration: 1.3,
            scale: 1.5, //1.5배 커짐
            ease: "bounce.out",
        });
        tl.to(appearBox.current, {
            scale: 1, //다시 scale이 1로 줄어듦(원래 크기로)
        });
    }, []);
    return (
        <div className={styles.intro_wrap}>
            <div className={styles.bg} ref={appearBox} />
            <div className={styles.text}>
                {/* <Fade bottom cascade> */}
                Towards the Future
                <br />
                Make a Record
                {/* </Fade> */}
            </div>
            {/* <Fade bottom>
                <Spin duration={1000}>
                    <img
                        src={star}
                        width={50}
                        alt="별_이미지"
                        className={styles.star_img}
                    />
                </Spin>
            </Fade> */}
        </div>
    );
};

export default Intro;
