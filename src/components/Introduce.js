import React from "react";
import styles from "css/Introduce.module.css";
import img1 from "img/id_pic.jpg";

const Intro = () => {
    return (
        <div id="1" className={styles.introduce_wrap}>
            <h2>About me</h2>
            <div className={styles.intro}>
                <img src={img1} alt="증명사진" width={150} />
                <div className={styles.address}>
                    김주미 / portfolio
                    <br />
                    어쩌구저쩌구 개발자 김주미입니다.
                    <br />
                    어쩌구저쩌구
                </div>
            </div>
        </div>
    );
};

export default Intro;
