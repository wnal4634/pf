import React from "react";
import styles from "css/Intro.module.css";
import Fade from "react-reveal/Fade";
import Spin from "react-reveal/Spin";
import star from "img/star.png";

const Intro = () => {
    return (
        <>
            <div className={styles.bg}>
                <div className={styles.text}>
                    <Fade bottom cascade>
                        Towards the Future
                        <br />
                        Make a Record
                    </Fade>
                </div>
            </div>
            <div className={styles.triangle}></div>
            <Fade bottom>
                <Spin duration={1000}>
                    <img
                        src={star}
                        width={50}
                        alt="별_이미지"
                        className={styles.star_img}
                    />
                </Spin>
            </Fade>
        </>
    );
};

export default Intro;
