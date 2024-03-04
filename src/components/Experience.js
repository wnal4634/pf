import React, { useEffect, useRef, useState } from "react";
import styles from "css/Experience.module.scss";
import Modal from "react-modal";
import { gsap } from "gsap";
import { ArrowSVG } from "components/SVG";
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faXmark,
    faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { RealMobile, PCMinusRealMobile } from "components/Responsive";
import link from "components/Link";
import BgAni from "./BgAni";
import { ExperienceData } from "components/ArrayData";
import { ZigzagSVG } from "components/SVG";

const ModalStyle = {
    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 1000,
    },
    content: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate3d(-51%, -50%, 0)",
        // width: "50%",
        height: "100%",
        // border: "1px solid #ccc",
        // background: "#fff",
        overflow: "auto",
        WebkitOverflowScrolling: "touch",
        // borderRadius: "10px",
        outline: "none",
        // padding: "20px",
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
const ScrollDiv = () => {
    return (
        <div className={styles.rolling_text}>
            <ul>
                <li>
                    <span>click me click me</span>
                </li>
                <li>
                    <span>click me click me</span>
                </li>
                <li>
                    <span>click me click me</span>
                </li>
                <li>
                    <span>click me click me</span>
                </li>
                <li>
                    <span>click me click me</span>
                </li>
            </ul>
            <ul>
                <li>
                    <span>click me click me</span>
                </li>
                <li>
                    <span>click me click me</span>
                </li>
                <li>
                    <span>click me click me</span>
                </li>
                <li>
                    <span>click me click me</span>
                </li>
                <li>
                    <span>click me click me</span>
                </li>
            </ul>
        </div>
    );
};

const Experience = () => {
    let [data, setData] = useState(ExperienceData);
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
        // gsap.set(
        //     `.${styles.close}, .${styles.img_inside}, .${styles.detail}, .${styles.detail_wrap}`,
        //     {
        //         opacity: 1,
        //         translateY: 0,
        //     },
        // );

        tl.fromTo(
            `#${styles.gsap_bg}` + `${i}`,
            {
                opacity: 0,
                // scaleX: 0,
                // transformOrigin: "left center",
            },
            {
                opacity: 1,
                // scaleX: 1,
                ease: "Expo.in",
                pointerEvents: "auto",
            },
        )
            .fromTo(
                `.${styles.modal}`,
                {
                    translateY: "100%",
                    // scaleY: 0,
                    // transformOrigin: "0 100%",
                },
                {
                    translateY: 0,
                    // scaleY: 1,
                    duration: 1,
                    ease: "elastic.out(1,1)",
                    stagger: 0.15,
                },
                "-=0.5",
            )
            .from(`.${styles.close}`, {
                opacity: 0,
                translateY: "-10%",
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
            translateY: "-10%",
            ease: "Expo.in",
        })
            .to(
                `.${styles.modal}`,
                {
                    translateY: "100%",
                    duration: 1,
                    ease: "elastic.in(1,1)",
                    stagger: 0.15,
                },
                "-=0.5",
            )
            .to(`.${styles.gsap_bg}`, {
                // transformOrigin: "100% 0",
                // scaleX: 0,
                opacity: 0,
                pointerEvents: "none",
                ease: "Expo.inOut",
            })
            .set(`.${styles.gsap_before}`, {
                pointerEvents: "auto",
            })
            .set(`.${styles.close}, .${styles.modal}`, {
                opacity: 1,
                translateY: 0,
            });
    };

    const showMobile = (i) => {
        let tl = gsap.timeline();

        gsap.set(`.${styles.gsap_before}`, {
            pointerEvents: "none",
        });

        tl.fromTo(
            `#${styles.gsap_bg}` + `${i}`,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                ease: "Expo.in",
                pointerEvents: "auto",
            },
        )
            .fromTo(
                `.${styles.modal}`,
                {
                    translateY: "100%",
                },
                {
                    translateY: 0,
                    duration: 1,
                    ease: "elastic.out(1,1)",
                },
                "-=0.5",
            )
            .from(`.${styles.close}`, {
                opacity: 0,
                translateY: "-10%",
                ease: "Expo.in",
            })
            .set(`.${styles.gsap_before}`, {
                pointerEvents: "auto",
            });
    };
    const hideMobile = () => {
        let tl = gsap.timeline();

        gsap.set(`.${styles.gsap_before}`, {
            pointerEvents: "none",
        });

        tl.to(`.${styles.close}`, {
            opacity: 0,
            translateY: "-10%",
            ease: "Expo.in",
        })
            .to(
                `.${styles.modal}`,
                {
                    translateY: "100%",
                    duration: 1,
                    ease: "elastic.in(1,1)",
                },
                "-=0.5",
            )
            .to(`.${styles.gsap_bg}`, {
                opacity: 0,
                pointerEvents: "none",
                ease: "Expo.inOut",
            })
            .set(`.${styles.gsap_before}`, {
                pointerEvents: "auto",
            })
            .set(`.${styles.close}, .${styles.modal}`, {
                opacity: 1,
                translateY: 0,
            });
    };

    return (
        <>
            <PCMinusRealMobile>
                <div id="3" className={styles.ex_wrap}>
                    <div className={styles.ex}>
                        <div className={styles.text}>
                            <span className={styles.text_main}>
                                What I've
                                <br />
                                experienced
                            </span>
                        </div>
                        <div className={styles.col}>
                            <div className={styles.ex_content_wrap}>
                                <div className={styles.ex_list_header}>
                                    <div className={styles.header}>type</div>
                                    <div className={styles.header}>project</div>
                                    <div className={styles.header}>host</div>
                                </div>
                                {data.map((s, i) => (
                                    <div
                                        className={styles.ex_list_content}
                                        key={i}
                                    >
                                        <div
                                            className={styles.gsap_before}
                                            onClick={() => {
                                                show(i);
                                                scrollStop();
                                            }}
                                        >
                                            <img src={s.img} alt="" />
                                            <img src={s.backImg} alt="" />
                                            <div
                                                className={styles.rolling_wrap}
                                            >
                                                <ScrollDiv />
                                            </div>
                                            <div className={styles.content}>
                                                {s.kind}
                                            </div>
                                            <div className={styles.content}>
                                                {s.project}
                                            </div>
                                            <div className={styles.content}>
                                                {s.platform}
                                            </div>
                                        </div>
                                        <div
                                            className={styles.gsap_bg}
                                            id={`${styles.gsap_bg}` + `${i}`}
                                        >
                                            <div className={styles.modal}>
                                                <div className={styles.top}>
                                                    <div>
                                                        what I've experienced
                                                    </div>
                                                    <div>No. {i + 1}</div>
                                                </div>
                                                <img src={s.img} />
                                                {/* <div className={styles.noise} />
                                                <BgAni /> */}
                                            </div>
                                            <div className={styles.modal}>
                                                <div className={styles.noise} />
                                                <BgAni />
                                                <div className={styles.top}>
                                                    <div>
                                                        what I've experienced
                                                    </div>
                                                    <div
                                                        className={styles.close}
                                                        onClick={() => {
                                                            hide();
                                                            scrollMove();
                                                        }}
                                                    >
                                                        close
                                                    </div>
                                                </div>
                                                <div
                                                    className={
                                                        styles.modal_content
                                                    }
                                                >
                                                    <div
                                                        className={`${styles.cnt} ${styles.title}`}
                                                    >
                                                        <span>Title</span>
                                                        <div>{s.title}</div>
                                                    </div>
                                                    <div
                                                        className={`${styles.cnt} ${styles.info}`}
                                                    >
                                                        <span>Date</span>
                                                        <div>{s.date}</div>
                                                    </div>
                                                    <div
                                                        className={`${styles.cnt} ${styles.contrib}`}
                                                    >
                                                        <span>
                                                            Contributors
                                                        </span>
                                                        <div>{s.contrib}</div>
                                                    </div>
                                                    <div
                                                        className={`${styles.cnt} ${styles.content}`}
                                                    >
                                                        <span>
                                                            Introduction
                                                        </span>
                                                        <div>
                                                            <span>
                                                                {s.content}
                                                            </span>
                                                            {s.content2 !==
                                                            null ? (
                                                                <span
                                                                    className={
                                                                        styles.mg_top
                                                                    }
                                                                >
                                                                    {s.content2}
                                                                </span>
                                                            ) : null}
                                                        </div>
                                                    </div>
                                                    {s.url1 !== null &&
                                                    s.url2 !== null ? (
                                                        <>
                                                            <div
                                                                className={`${styles.cnt} ${styles.check}`}
                                                            >
                                                                <span>
                                                                    Link to
                                                                    check
                                                                </span>
                                                                <div
                                                                    className={
                                                                        styles.ex_url_wrap
                                                                    }
                                                                >
                                                                    <div
                                                                        className={
                                                                            styles.ex_url
                                                                        }
                                                                        onClick={() => {
                                                                            window.open(
                                                                                s.url1,
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
                                                                        className={
                                                                            styles.ex_url
                                                                        }
                                                                        onClick={() => {
                                                                            window.open(
                                                                                s.url2,
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
                                                        </>
                                                    ) : null}
                                                    {s.url3 !== null ? (
                                                        <>
                                                            <div
                                                                className={`${styles.cnt} ${styles.check}`}
                                                            >
                                                                <span>
                                                                    Link to
                                                                    check
                                                                </span>
                                                                <div
                                                                    className={
                                                                        styles.ex_url_wrap
                                                                    }
                                                                >
                                                                    <div
                                                                        className={
                                                                            styles.ex_url
                                                                        }
                                                                        onClick={() => {
                                                                            window.open(
                                                                                s.url3,
                                                                            );
                                                                        }}
                                                                    >
                                                                        <div>
                                                                            드라이브
                                                                            <FontAwesomeIcon
                                                                                icon={
                                                                                    faArrowUpRightFromSquare
                                                                                }
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </>
                                                    ) : null}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </PCMinusRealMobile>
            <RealMobile>
                <div id="3" className={styles.ex_wrap}>
                    <div className={styles.ex}>
                        <div className={styles.text}>
                            <span className={styles.text_main}>
                                What I've_
                                <br />
                                experienced
                            </span>
                        </div>
                        <div className={styles.ex_content_wrap}>
                            {data.map((s, i) => (
                                <div className={styles.ex_list_content} key={i}>
                                    <div
                                        className={styles.gsap_before}
                                        onClick={() => {
                                            showMobile(i);
                                            scrollStop();
                                        }}
                                    >
                                        <div
                                            className={styles.gradient_bg_top}
                                        />
                                        <span>click</span>
                                        <img src={s.img} alt="" />
                                        <ZigzagSVG color={s.stroke} />
                                        <div className={styles.content}>
                                            {s.kind}
                                        </div>
                                        <div
                                            className={
                                                styles.gradient_bg_bottom
                                            }
                                        />
                                    </div>
                                    <div
                                        className={styles.gsap_bg}
                                        id={`${styles.gsap_bg}` + `${i}`}
                                    >
                                        <div className={styles.modal}>
                                            <div className={styles.top}>
                                                <div>what I've experienced</div>
                                                <div
                                                    className={styles.close}
                                                    onClick={() => {
                                                        hideMobile();
                                                        scrollMove();
                                                    }}
                                                >
                                                    close
                                                </div>
                                            </div>
                                            <img src={s.img} />
                                            <div className={styles.noise} />
                                            <BgAni />
                                            <div
                                                className={styles.modal_content}
                                            >
                                                <div
                                                    className={`${styles.cnt} ${styles.title}`}
                                                >
                                                    <span>Title</span>
                                                    <div>{s.title}</div>
                                                </div>
                                                <div
                                                    className={`${styles.cnt} ${styles.info}`}
                                                >
                                                    <span>Date</span>
                                                    <div>{s.date}</div>
                                                </div>
                                                <div
                                                    className={`${styles.cnt} ${styles.contrib}`}
                                                >
                                                    <span>Contributors</span>
                                                    <div>{s.contrib}</div>
                                                </div>
                                                <div
                                                    className={`${styles.cnt} ${styles.content}`}
                                                >
                                                    <span>Introduction</span>
                                                    <div>
                                                        <span>{s.content}</span>
                                                        {s.content2 !== null ? (
                                                            <span
                                                                className={
                                                                    styles.mg_top
                                                                }
                                                            >
                                                                {s.content2}
                                                            </span>
                                                        ) : null}
                                                    </div>
                                                </div>
                                                {s.url1 !== null &&
                                                s.url2 !== null ? (
                                                    <>
                                                        <div
                                                            className={`${styles.cnt} ${styles.check}`}
                                                        >
                                                            <span>
                                                                Link to check
                                                            </span>
                                                            <div
                                                                className={
                                                                    styles.ex_url_wrap
                                                                }
                                                            >
                                                                <div
                                                                    className={
                                                                        styles.ex_url
                                                                    }
                                                                    onClick={() => {
                                                                        window.open(
                                                                            s.url1,
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
                                                                    className={
                                                                        styles.ex_url
                                                                    }
                                                                    onClick={() => {
                                                                        window.open(
                                                                            s.url2,
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
                                                    </>
                                                ) : null}
                                                {s.url3 !== null ? (
                                                    <>
                                                        <div
                                                            className={`${styles.cnt} ${styles.check}`}
                                                        >
                                                            <span>
                                                                Link to check
                                                            </span>
                                                            <div
                                                                className={
                                                                    styles.ex_url_wrap
                                                                }
                                                            >
                                                                <div
                                                                    className={
                                                                        styles.ex_url
                                                                    }
                                                                    onClick={() => {
                                                                        window.open(
                                                                            s.url3,
                                                                        );
                                                                    }}
                                                                >
                                                                    <div>
                                                                        드라이브
                                                                        <FontAwesomeIcon
                                                                            icon={
                                                                                faArrowUpRightFromSquare
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>
                                                ) : null}
                                            </div>
                                            <div className={styles.scroll}>
                                                ↓
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </RealMobile>
        </>
    );
};

export default Experience;
