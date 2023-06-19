import React from "react";
import styles from "css/Introduce.module.css";
import img1 from "img/id_pic.jpg";
import { Mobile, Tablet, PC } from "components/Responsive";

const Introduce = () => {
    const githubUrl = "https://github.com/wnal4634";
    const email = "";
    const blogUrl = "https://wnal4634.tistory.com/";

    return (
        <>
            <PC>
                <div id="1" className={styles.introduce_wrap}>
                    <h2>About me</h2>
                    <div className={styles.intro}>
                        <img src={img1} alt="증명사진" width={150} />
                        <div className={styles.address}>
                            <div>
                                김주미 Portfolio
                                <br />
                                전진하는 개발자, 김주미입니다.
                            </div>
                        </div>
                        <div className={styles.url_wrap}>
                            <div className={styles.url}>
                                ✉️
                                <a>wnal4634@naver.com</a>
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
                                📁
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
            </PC>

            <Tablet></Tablet>
            <Mobile></Mobile>
        </>
    );
};

export default Introduce;
