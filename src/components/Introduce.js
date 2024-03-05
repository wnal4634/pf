import React, { useEffect, useRef } from "react";
import styles from "css/Introduce.module.scss";
import { gsap } from "gsap";
import { MinusPC, PCMinusPC } from "components/Responsive";

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
            <PCMinusPC>
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
            </PCMinusPC>
            <MinusPC>
                <div className={styles.introduce_wrap}>
                    <div className={styles.main_text}>
                        <span className={styles.text}>
                            Hello.
                            <span>No back, go forward.</span>
                        </span>
                        <span className={styles.text}>
                            I'm
                            <span>A constantly thinking</span>
                        </span>
                        <span className={styles.text}>
                            Jumi Kim
                            <span>developer</span>
                        </span>
                    </div>
                </div>
            </MinusPC>
        </>
    );
};

export default Introduce;
