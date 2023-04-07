import React from "react";
import styles from "css/Introduce.module.css";
import img1 from "img/id_pic.jpg";

const Intro = () => {
    const githubUrl = "https://github.com/wnal4634";
    const email = "";
    const blogUrl = "https://wnal4634.tistory.com/";
    return (
        <div id="1">
            <h2>1</h2>
            <p>About me</p>
            <div className={styles.introduce_wrap}>
                <div className={styles.intro}>
                    <img src={img1} alt="증명사진" width={150} />
                </div>
                <div className={styles.address}>
                    김주미 / portfolio
                    <br />
                    어쩌구저쩌구 개발자 김주미입니다.
                    <br />
                    어쩌구저쩌구
                    <br />
                    <div className={styles.url}>
                        <button
                            onClick={() => {
                                window.open(githubUrl);
                            }}
                        >
                            Github
                        </button>
                        <button>Email</button>
                        <button
                            onClick={() => {
                                window.open(blogUrl);
                            }}
                        >
                            Blog
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro;
