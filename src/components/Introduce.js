import React, { useEffect, useRef } from "react";
import styles from "css/Introduce.module.scss";
import { gsap } from "gsap";

const Introduce = () => {
    const appearText_1 = useRef();
    const appearText_2 = useRef();
    const appearText_3 = useRef();

    useEffect(() => {
        gsap.from(appearText_1.current, {
            y: 10,
            opacity: 0,
            duration: 0.8,
            delay: 1,
            ease: "expo.out",
        });
        gsap.from(appearText_2.current, {
            y: 10,
            opacity: 0,
            duration: 0.8,
            delay: 1.25,
            ease: "expo.out",
        });
        gsap.from(appearText_3.current, {
            y: 10,
            opacity: 0,
            duration: 0.8,
            delay: 1.5,
            ease: "expo.out",
        });
    }, []);

    return (
        <>
            {/* <Fade bottom>
                <div id="1" className={styles.introduce_wrap}>
                    <h1>김주미 Portfolio</h1>
                    <div className={styles.intro}>
                        <div className={styles.img}>
                            <img src={img1} alt="증명사진" />
                        </div>
                        <div className={styles.intro_url_wrap}>
                            <div>
                                끊임없이 생각하는 개발자, 김주미입니다.
                                <br />
                                <br />
                                하나의 문제에도 여러 방면으로 접근하는 것을
                                좋아하며, 다양한 시각에서 사고할 수 있는 습관을
                                기르고 있습니다.
                            </div>
                            <hr />
                            <div className={styles.url_wrap}>
                                <div className={styles.url}>
                                    ✉️
                                    <a>wnal7707@gmail.com</a>
                                </div>
                                <div className={styles.url}>
                                    💻
                                    <a
                                        onClick={() => {
                                            window.open(githubUrl);
                                        }}
                                    >
                                        Github
                                    </a>
                                </div>
                                <div className={styles.url}>
                                    📖
                                    <a
                                        onClick={() => {
                                            window.open(blogUrl);
                                        }}
                                    >
                                        Blog
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade> */}
            <div className={styles.introduce_wrap}>
                <div className={styles.main_text}>
                    <span className={styles.text} ref={appearText_1}>
                        Hello.
                        <span>No back, go forward.</span>
                    </span>
                    <span className={styles.text} ref={appearText_2}>
                        I'm
                        <span>A constantly thinking</span>
                    </span>
                    <span className={styles.text} ref={appearText_3}>
                        Jumi Kim
                        <span>developer</span>
                    </span>
                </div>
            </div>
        </>
    );
};

export default Introduce;
