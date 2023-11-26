import React, { useState } from "react";
import styles from "css/Experience.module.css";
import Modal from "react-modal";
import img1 from "img/공모전_상장.png";
import Fade from "react-reveal/Fade";

const ModalStyle = {
    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.3)",
    },
    content: {
        position: "absolute",
        top: "70px",
        left: "15vw",
        right: "15vw",
        bottom: "40px",
        // border: "1px solid #ccc",
        background: "#fff",
        overflow: "auto",
        WebkitOverflowScrolling: "touch",
        borderRadius: "10px",
        outline: "none",
        padding: "20px",
    },
};

const Experience = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <>
            <Fade bottom>
                <div id="4" className={styles.experience_wrap}>
                    <h2>😉 Experience</h2>
                    <hr />
                    <div className={styles.modal_wrap}>
                        <img
                            src={img1}
                            className={styles.img}
                            alt="상장 이미지"
                            onClick={() => setModalIsOpen(true)}
                        />
                        <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={() => setModalIsOpen(false)}
                            style={ModalStyle}
                            className={styles.modal}
                        >
                            <img
                                src={img1}
                                className={styles.modal_img}
                                alt="상장 이미지"
                            />

                            <div className={styles.modal_content}>
                                <div>
                                    <b>한국정보통신보안윤리학회</b> 주관 공모전
                                </div>
                                <div>
                                    2022년 제6회
                                    <br />
                                    <b>
                                        4차 산업혁명 인재양성
                                        <br />
                                        공유·협업페스티발
                                    </b>
                                </div>
                                <div>
                                    캡스톤경진실적물/기타 부문
                                    <br /> <b>우수상</b> 수상
                                </div>
                            </div>
                        </Modal>
                    </div>
                </div>
            </Fade>
        </>
    );
};

export default Experience;
