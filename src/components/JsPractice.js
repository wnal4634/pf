import React, { useRef, useState } from "react";
import styles from "css/JsPractice.module.css";
import Fade from "react-reveal/Fade";
import img1 from "img/cookkit.jpg";
import Modal from "react-modal";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Mousewheel } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
    const [modalIsOpen1, setModalIsOpen1] = useState(false);
    const [modalIsOpen2, setModalIsOpen2] = useState(false);
    const [modalIsOpen3, setModalIsOpen3] = useState(false);
    const [modalIsOpen4, setModalIsOpen4] = useState(false);

    return (
        <div id="3" className={styles.practice_wrap}>
            <h2>📁 js 작업물</h2>
            <div className={styles.column}>
                <div className={styles.row_1}>
                    <Fade bottom>
                        <div className={styles.row}>
                            <img
                                src={img1}
                                alt="앱사진"
                                onClick={() => setModalIsOpen1(true)}
                            />
                            <div className={styles.click}>Click !</div>
                            <Modal
                                isOpen={modalIsOpen1}
                                onRequestClose={() => setModalIsOpen1(false)}
                                style={ModalStyle}
                                className={styles.modal}
                            >
                                <Swiper
                                    slidesPerView={1}
                                    spaceBetween={30}
                                    loop={true}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    navigation={true}
                                    modules={[Pagination, Navigation]}
                                    className={styles.mySwiper}
                                >
                                    <SwiperSlide>Slide 1</SwiperSlide>
                                    <SwiperSlide>Slide 2</SwiperSlide>
                                    <SwiperSlide>Slide 3</SwiperSlide>
                                    <SwiperSlide>Slide 4</SwiperSlide>
                                    <SwiperSlide>Slide 5</SwiperSlide>
                                </Swiper>
                                <div className={styles.modal_content}>
                                    content
                                </div>
                            </Modal>
                        </div>
                    </Fade>
                    <Fade bottom duration={1500}>
                        <div className={styles.row}>
                            <img
                                src={img1}
                                alt="앱사진"
                                onClick={() => setModalIsOpen2(true)}
                            />
                            <div className={styles.click}>Click !</div>
                            <Modal
                                isOpen={modalIsOpen2}
                                onRequestClose={() => setModalIsOpen2(false)}
                                style={ModalStyle}
                                className={styles.modal}
                            >
                                <Swiper
                                    slidesPerView={1}
                                    spaceBetween={30}
                                    loop={true}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    navigation={true}
                                    modules={[Pagination, Navigation]}
                                    className={styles.mySwiper}
                                >
                                    <SwiperSlide>Slide 1</SwiperSlide>
                                    <SwiperSlide>Slide 2</SwiperSlide>
                                    <SwiperSlide>Slide 3</SwiperSlide>
                                    <SwiperSlide>Slide 4</SwiperSlide>
                                    <SwiperSlide>Slide 5</SwiperSlide>
                                    <SwiperSlide>Slide 6</SwiperSlide>
                                    <SwiperSlide>Slide 7</SwiperSlide>
                                    <SwiperSlide>Slide 8</SwiperSlide>
                                    <SwiperSlide>Slide 9</SwiperSlide>
                                </Swiper>
                                <div className={styles.modal_content}>
                                    content
                                </div>
                            </Modal>
                        </div>
                    </Fade>
                </div>
                <div className={styles.row_2}>
                    <Fade bottom duration={1500}>
                        <div className={styles.row}>
                            <img
                                src={img1}
                                alt="앱사진"
                                onClick={() => setModalIsOpen3(true)}
                            />
                            <div className={styles.click}>Click !</div>
                            <Modal
                                isOpen={modalIsOpen3}
                                onRequestClose={() => setModalIsOpen3(false)}
                                style={ModalStyle}
                                className={styles.modal}
                            >
                                <Swiper
                                    slidesPerView={1}
                                    spaceBetween={30}
                                    loop={true}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    navigation={true}
                                    modules={[Pagination, Navigation]}
                                    className={styles.mySwiper}
                                >
                                    <SwiperSlide>Slide 1</SwiperSlide>
                                    <SwiperSlide>Slide 2</SwiperSlide>
                                    <SwiperSlide>Slide 3</SwiperSlide>
                                    <SwiperSlide>Slide 4</SwiperSlide>
                                    <SwiperSlide>Slide 5</SwiperSlide>
                                    <SwiperSlide>Slide 6</SwiperSlide>
                                    <SwiperSlide>Slide 7</SwiperSlide>
                                    <SwiperSlide>Slide 8</SwiperSlide>
                                    <SwiperSlide>Slide 9</SwiperSlide>
                                </Swiper>
                                <div className={styles.modal_content}>
                                    content
                                </div>
                            </Modal>
                        </div>
                    </Fade>
                    <Fade bottom duration={2000}>
                        <div className={styles.row}>
                            <img
                                src={img1}
                                alt="앱사진"
                                onClick={() => setModalIsOpen4(true)}
                            />
                            <div className={styles.click}>Click !</div>
                            <Modal
                                isOpen={modalIsOpen4}
                                onRequestClose={() => setModalIsOpen4(false)}
                                style={ModalStyle}
                                className={styles.modal}
                            >
                                <Swiper
                                    slidesPerView={1}
                                    spaceBetween={30}
                                    loop={true}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    navigation={true}
                                    modules={[Pagination, Navigation]}
                                    className={styles.mySwiper}
                                >
                                    <SwiperSlide>Slide 1</SwiperSlide>
                                    <SwiperSlide>Slide 2</SwiperSlide>
                                    <SwiperSlide>Slide 3</SwiperSlide>
                                    <SwiperSlide>Slide 4</SwiperSlide>
                                    <SwiperSlide>Slide 5</SwiperSlide>
                                    <SwiperSlide>Slide 6</SwiperSlide>
                                    <SwiperSlide>Slide 7</SwiperSlide>
                                    <SwiperSlide>Slide 8</SwiperSlide>
                                    <SwiperSlide>Slide 9</SwiperSlide>
                                </Swiper>
                                <div className={styles.modal_content}>
                                    content
                                </div>
                            </Modal>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default JsPractice;
