import React from "react";
import styles from "css/Introduce.module.css";
import img1 from "img/id_pic.jpg";
import Fade from "react-reveal/Fade";
import img from "img/1.jpg";

const Introduce = () => {
    const githubUrl = "https://github.com/wnal4634";
    const blogUrl = "https://wnal4634.tistory.com/";

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
            <div id="1" className={styles.introduce_wrap}>
                <div className={styles.main_text}>
                    <text>No back, go forward</text>
                    <text>a constantly thinking developer</text>
                </div>
            </div>
        </>
    );
};

export default Introduce;
