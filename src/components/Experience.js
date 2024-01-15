import React, { useState } from "react";
import styles from "css/Experience.module.css";
import Modal from "react-modal";
import img1 from "img/ex/공모전_상장.png";
import img2 from "img/ex/ankkoDetailPage.png";
import img3 from "img/ex/ankkoMenu.png";
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faXmark,
    faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { Mobile, PC } from "components/Responsive";
import link from "./Link";

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
            {/* <PC>
                <Fade bottom>
                    <div id="4" className={styles.experience_wrap}>
                        <h2>Experience</h2>
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
            </PC> */}
            <PC>
                <div id="4" className={styles.ex_wrap}>
                    <h2>Experience</h2>
                    <hr />
                    <div className={styles.ex}>
                        <div className={styles.main_ex}>
                            <img src={img1} alt="공모전 상장 이미지" />
                            <div className={styles.ex_text_wrap}>
                                <div className={styles.box} />
                                <div className={styles.ex_text}>
                                    한국정보통신보안윤리학회 주관 공모전 제6회
                                    산업혁명 인재양성 공유·협업페스티발에
                                    졸업작품 '레시피 공유 및 밀키트 판매 앱'으로
                                    출전해 캡스톤경진실적물/기타 부문에서
                                    우수상을 수상했습니다.
                                </div>
                            </div>
                        </div>
                        <div className={styles.sub_ex_wrap}>
                            <div className={styles.sub_title}>
                                Lorem ipsum is placeh
                            </div>
                            <div className={styles.sub_ex}>
                                <div className={styles.sub_ex_1}>
                                    <img src={img3} alt="작업물 이미지" />
                                    <div className={styles.ex_text_wrap}>
                                        <div className={styles.box} />
                                        <div className={styles.ex_text}>
                                            식품 브랜드 '앙꼬'와 작업한
                                            메뉴판입니다. 각 메뉴의 일러스트는
                                            실제 이미지와 근접하도록 직접
                                            그렸으며, 각 제품에 간단한 설명을
                                            더해 쉬운 파악이 가능하도록
                                            제작했습니다.
                                        </div>
                                        <div className={styles.ex_url_wrap}>
                                            Lorem ipsum dolor sit amet,
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.sub_ex_2}>
                                    <img src={img2} alt="작업물 이미지" />
                                    <div className={styles.ex_text_wrap}>
                                        <div className={styles.box} />
                                        <div className={styles.ex_text}>
                                            식품 브랜드 '앙꼬'와의 두 번째
                                            작업으로, 판매 제품인 도라야끼의
                                            상세 페이지와 제품 기한카드를
                                            제작했습니다. 상세 페이지에는 제품의
                                            종류 및 맛 설명, 다른 브랜드와의
                                            차별화 등을 담았습니다.
                                            <br />
                                            기한카드는 상반기와 하반기 제품으로
                                            나뉘어 있으며, 판매 제품들의
                                            소비기한과 보관 방법을 작성했니다.
                                        </div>
                                        <div className={styles.ex_url_wrap}>
                                            <div
                                                className={styles.ex_url}
                                                onClick={() => {
                                                    window.open(
                                                        link.outsource_use,
                                                    );
                                                }}
                                            >
                                                <div>
                                                    사용처
                                                    <FontAwesomeIcon
                                                        icon={
                                                            faArrowUpRightFromSquare
                                                        }
                                                    />
                                                </div>
                                            </div>
                                            <div
                                                className={styles.ex_url}
                                                onClick={() => {
                                                    window.open(
                                                        link.outsource_figma,
                                                    );
                                                }}
                                            >
                                                <div>
                                                    피그마
                                                    <FontAwesomeIcon
                                                        icon={
                                                            faArrowUpRightFromSquare
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </PC>
            {/* <Mobile>
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
            </Mobile> */}
        </>
    );
};

export default Experience;
