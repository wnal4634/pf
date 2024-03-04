import React, { useEffect, useRef, useState } from "react";
import styles from "css/Project.module.scss";
import Fade from "react-reveal/Fade";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import images from "components/ImagesImport";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import "css/Swiper-bundle.css";
import colors from "components/SkillsColor";
import link from "components/Link";
import { WaveSVG, CircleSVG, RectSVG } from "components/SVG";
import { ProjectData } from "components/ArrayData";
import { gsap } from "gsap";

const Projects = () => {
    let [data, setData] = useState(ProjectData);
    const scrollStop = () => {
        document.body.style.overflow = "hidden";
    };
    const scrollMove = () => {
        document.body.style.overflow = "unset";
    };

    const show = (i) => {
        let tl = gsap.timeline();

        gsap.set(`.${styles.gsap_before}`, {
            pointerEvents: "none",
        });
        gsap.set(
            `.${styles.close}, .${styles.img_inside}, .${styles.detail}, .${styles.detail_wrap}`,
            {
                opacity: 1,
                translateY: 0,
            },
        );

        tl.fromTo(
            `#${styles.gsap_bg}` + `${i}`,
            {
                scaleX: 0,
                transformOrigin: "left center",
            },
            {
                scaleX: 1,
                ease: "Expo.in",
            },
        )
            .from(`.${styles.close}`, {
                opacity: 0,
                translateY: "-30%",
                ease: "Expo.in",
            })
            .fromTo(
                `.${styles.img_bg}`,
                {
                    // translateY: "-30%",
                    scaleY: 1,
                    transformOrigin: "0 100%",
                },
                {
                    scaleY: 0,
                    duration: 1,
                    ease: "Expo.in",
                },
            )
            .from(`.${styles.detail}, .${styles.detail_wrap}`, {
                opacity: 0,
                duration: 0.3,
                ease: "Expo.in",
            })
            .set(`.${styles.gsap_before}`, {
                pointerEvents: "auto",
            });
    };
    const hide = () => {
        let tl = gsap.timeline();

        gsap.set(`.${styles.gsap_before}`, {
            pointerEvents: "none",
        });

        tl.to(`.${styles.close}`, {
            opacity: 0,
            translateY: "-30%",
            ease: "Expo.in",
        })
            .fromTo(
                `.${styles.img_bg}`,
                {
                    // translateY: "-30%",
                    scaleY: 0,
                    transformOrigin: "0 100%",
                },
                {
                    scaleY: 1,
                    duration: 1,
                    ease: "Expo.in",
                },
            )
            .to(`.${styles.detail}, .${styles.detail_wrap}`, {
                opacity: 0,
                duration: 0.3,
                ease: "Expo.in",
            })
            .to(`.${styles.gsap_bg}`, {
                transformOrigin: "100% 0",
                scaleX: 0,
                ease: "Expo.inOut",
            })
            .set(`.${styles.gsap_before}`, {
                pointerEvents: "auto",
            })
            .set(
                `.${styles.close}, .${styles.img_inside}, .${styles.detail}, .${styles.detail_wrap}`,
                {
                    opacity: 1,
                    translateY: 0,
                },
            );
    };

    return (
        <div className={styles.projects_wrap}>
            <div id="2" className={styles.projects_title}>
                <span>
                    projects
                    <br />
                    programmed;
                </span>
            </div>
            {data.map((s, i) => (
                <div key={i} className={styles.project}>
                    <CircleSVG len="20" includStroke="24" color="#434a8a" />
                    <CircleSVG len="7" includStroke="11" color="#1d1a3f" />
                    <div
                        className={styles.gsap_before}
                        onClick={() => {
                            show(i);
                            scrollStop();
                        }}
                    >
                        <img src={s.img} className={styles.random_img1} />
                        <div className={styles.noise} />
                        <div className={styles.info}>
                            <span>{s.title}</span>
                            <p>
                                {s.info}
                                <WaveSVG />
                            </p>
                        </div>
                    </div>
                    <div className={styles.rect}>
                        <RectSVG />
                    </div>
                    <div
                        className={styles.gsap_bg}
                        id={`${styles.gsap_bg}` + `${i}`}
                    >
                        <div className={styles.detail_wrap}>
                            {/* <div className={styles.swiper}>
                                    <Swiper
                                        slidesPerView={1}
                                        spaceBetween={30}
                                        centeredSlides={true}
                                        autoplay={{
                                            delay: 2500,
                                            disableOnInteraction: false,
                                        }}
                                        pagination={{
                                            clickable: true,
                                        }}
                                        navigation={true}
                                        modules={[
                                            Autoplay,
                                            Pagination,
                                            Navigation,
                                        ]}
                                        className={styles.mySwiper}
                                    >
                                        <SwiperSlide>
                                            <img
                                                src={imggg}
                                                className={styles.detail_img}
                                            />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img
                                                src={imggg}
                                                className={styles.detail_img}
                                            />
                                        </SwiperSlide>
                                    </Swiper>
                                </div> */}
                            <img src={s.rep_img} alt="" />
                            <div className={styles.detail}>
                                <div className={styles.detail_title}>
                                    {s.title}
                                </div>
                                <span className={styles.detail_sum}>
                                    {s.detail_sum}
                                </span>
                                <div className={styles.detail_info}>
                                    {s.detail_info}
                                </div>
                                <div className={styles.detail_url}>
                                    {s.github !== null ? (
                                        <li
                                            style={{
                                                color: colors.Github,
                                            }}
                                            onClick={() => {
                                                window.open(s.github);
                                            }}
                                        >
                                            깃허브
                                            <FontAwesomeIcon
                                                icon={faArrowUpRightFromSquare}
                                            />
                                        </li>
                                    ) : null}
                                    {s.demo !== null ? (
                                        <li
                                            onClick={() => {
                                                window.open(s.demo);
                                            }}
                                        >
                                            데모
                                            <FontAwesomeIcon
                                                icon={faArrowUpRightFromSquare}
                                            />
                                        </li>
                                    ) : null}
                                    {s.figma !== null ? (
                                        <li
                                            style={{ color: colors.Figma }}
                                            onClick={() => {
                                                window.open(s.figma);
                                            }}
                                        >
                                            피그마
                                            <FontAwesomeIcon
                                                icon={faArrowUpRightFromSquare}
                                            />
                                        </li>
                                    ) : null}
                                    {s.colab !== null ? (
                                        <li
                                            style={{ color: colors.Colab }}
                                            onClick={() => {
                                                window.open(s.colab);
                                            }}
                                        >
                                            코랩
                                            <FontAwesomeIcon
                                                icon={faArrowUpRightFromSquare}
                                            />
                                        </li>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                        <div className={styles.right}>
                            <div
                                className={styles.close}
                                onClick={() => {
                                    hide();
                                    scrollMove();
                                }}
                            >
                                close
                            </div>
                            <div className={styles.img_inside}>
                                <div className={styles.img_bg} />
                                <div className={styles.noise} />
                                <img src={s.img} />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Projects;
