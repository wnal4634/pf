import React from "react";
import styles from "css/Experience.module.css";
import img1 from "img/공모전_상장.png";

const Experience = () => {
    return (
        <div id="4" className={styles.experience_wrap}>
            <h2>😉 경험</h2>
            <div>
                <img src={img1} className={styles.img} />
                한국정보통신보안윤리학회
                <br />
                4차 산업혁명 인재양성 공유협업페스티발
                <br />
                캡스톤경진실적물
            </div>
        </div>
    );
};

export default Experience;
