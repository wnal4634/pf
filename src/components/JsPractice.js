import React, { useRef, useState } from "react";
import styles from "css/JsPractice.module.css";
import Fade from "react-reveal/Fade";
import img1 from "img/cookkit.jpg";
import Modal from "react-modal";

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

const JsPractice = () => {
    const jsUrl_1 = "https://wnal4634.github.io/momentum/";
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <div id="3" className={styles.practice_wrap}>
            <h2>js 작업물</h2>
            <div className={styles.column}>
                <div className={styles.row_1}>
                    <Fade bottom>
                        <div className={styles.row}>
                            <img
                                src={img1}
                                alt="앱사진"
                                onClick={() => setModalIsOpen(true)}
                            />
                            <Modal
                                isOpen={modalIsOpen}
                                onRequestClose={() => setModalIsOpen(false)}
                                style={ModalStyle}
                            >
                                This is Modal content
                            </Modal>
                            {/* <button
                                onClick={() => {
                                    window.open(jsUrl_1);
                                }}
                            >
                                Blog
                            </button> */}
                        </div>
                    </Fade>
                    <Fade bottom duration={1500}>
                        <div className={styles.row}>
                            <button
                                onClick={() => {
                                    window.open(jsUrl_1);
                                }}
                            >
                                Blog
                            </button>
                        </div>
                    </Fade>
                </div>
                <div className={styles.row_2}>
                    <Fade bottom duration={1500}>
                        <div className={styles.row}>
                            <button
                                onClick={() => {
                                    window.open(jsUrl_1);
                                }}
                            >
                                Blog
                            </button>
                        </div>
                    </Fade>
                    <Fade bottom duration={2000}>
                        <div className={styles.row}>
                            <button
                                onClick={() => {
                                    window.open(jsUrl_1);
                                }}
                            >
                                Blog
                            </button>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default JsPractice;
