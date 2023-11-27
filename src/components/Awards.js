import React, { useState } from "react";
import styles from "css/Awards.module.css";
import Modal from "react-modal";
import img1 from "img/공모전_상장.png";
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Mobile, PC } from "components/Responsive";

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
        top: "50%",
        left: "50%",
        transform: "translate3d(-50%, -48%, 0)",
        width: "550px",
        height: "650px",
        // border: "1px solid #ccc",
        background: "#fff",
        overflow: "auto",
        WebkitOverflowScrolling: "touch",
        borderRadius: "10px",
        outline: "none",
        padding: "20px",
    },
};
const ModalStyleMobile = {
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
        top: "50%",
        left: "50%",
        transform: "translate3d(-50%, -50%, 0)",
        width: "350px",
        height: "550px",
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
            <PC>
                <Fade bottom>
                    <div id="4" className={styles.experience_wrap}>
                        <h2>Awards</h2>
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
                                shouldCloseOnOverlayClick={false}
                            >
                                <img
                                    src={img1}
                                    className={styles.modal_img}
                                    alt="상장 이미지"
                                />
                                <FontAwesomeIcon
                                    icon={faXmark}
                                    size="2x"
                                    onClick={() => {
                                        setModalIsOpen(false);
                                    }}
                                />
                            </Modal>
                        </div>
                    </div>
                </Fade>
            </PC>
            <Mobile>
                <Fade bottom>
                    <div id="4" className={styles.experience_wrap}>
                        <h2>Awards</h2>
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
                                style={ModalStyleMobile}
                                className={styles.modal}
                                shouldCloseOnOverlayClick={false}
                            >
                                <img
                                    src={img1}
                                    className={styles.modal_img}
                                    alt="상장 이미지"
                                />
                                <FontAwesomeIcon
                                    icon={faXmark}
                                    size="2x"
                                    onClick={() => {
                                        setModalIsOpen(false);
                                    }}
                                />
                            </Modal>
                        </div>
                    </div>
                </Fade>
            </Mobile>
        </>
    );
};

export default Experience;
