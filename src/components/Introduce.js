import React from "react";
import styles from "css/Introduce.module.css";
import img1 from "img/id_pic.jpg";

const Introduce = () => {
    const githubUrl = "https://github.com/wnal4634";
    const blogUrl = "https://wnal4634.tistory.com/";

    return (
        <div id="1" className={styles.introduce_wrap}>
            <hr />
            <h2>👏 About me</h2>
            <div className={styles.intro}>
                <div className={styles.img}>
                    <img src={img1} alt="증명사진" width={150} />
                </div>
                <div className={styles.name}>
                    <h3>김주미 Portfolio</h3>
                    <div className={styles.intro_url_wrap}>
                        <div>
                            고교 시절에 처음 접한 코딩 수업에 흥미가 생겨 전공을
                            선택했고, 전공 중 프론트엔드를 배우면서 하나씩
                            만들어가는 것에 성취감을 느꼈습니다.
                            <br />
                            사용자가 원하는 UI를 제공할 수 있는 개발자가 되고
                            싶습니다. 잘 부탁드립니다.
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
        </div>
    );
};

export default Introduce;
