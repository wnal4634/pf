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
                    <div className={styles.text_col}>
                        <span>No back, go forward.</span>
                        <span>a constantly thinking developer</span>
                    </div>
                    <div className={styles.sub_text}>
                        <div>asdfasdfasdf</div>
                        <span>
                            하지만 그는 그랬소다. 어쩌구 저쩌구. 삼국지 보고
                            유선 생각하면 자다가도 뒷목잡고 일어날 수 있다.
                            그것이 사람인가? 물론 정사는 어떤지 모른다. 하지만
                            연의를 보았다면 내 심정도 이해할테지. 그것은 사람이
                            아니다. 사람탈을 쓴 짐승이다. 아니, 정정하겠다.
                            짐승도 주인을 알아보는 법이다. 유선은 금수만도
                            못한다고 말하겠다.
                        </span>
                    </div>
                </div>
                <div className={styles.img_and_text}>
                    <img src={img} alt="소개 이미지" />
                    <span>아아아아아아아아아아아아아아아</span>
                </div>
            </div>
            {/* <div className={styles.bg_square} /> */}
        </>
    );
};

export default Introduce;
