import React, { useRef, useState } from "react";
import styles from "css/JsPractice.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const jsPractice = () => {
    const jsUrl_1 = "https://wnal4634.github.io/momentum/";

    return (
        <div id="3" className={styles.practice_wrap}>
            <h2>js 작업물</h2>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className={styles.swiper}
            >
                <SwiperSlide className={styles.swiper_slide}>
                    <div className={styles.row}>
                        <button
                            onClick={() => {
                                window.open(jsUrl_1);
                            }}
                        >
                            Blog 1
                        </button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.swiper_slide}>
                    <div className={styles.row}>
                        <button
                            onClick={() => {
                                window.open(jsUrl_1);
                            }}
                        >
                            Blog 2
                        </button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.swiper_slide}>
                    <div className={styles.row}>
                        <button
                            onClick={() => {
                                window.open(jsUrl_1);
                            }}
                        >
                            Blog 3
                        </button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.swiper_slide}>
                    <div className={styles.row}>
                        <button
                            onClick={() => {
                                window.open(jsUrl_1);
                            }}
                        >
                            Blog 4
                        </button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default jsPractice;
