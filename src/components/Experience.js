import React, { useEffect, useRef, useState } from "react";
import styles from "css/Experience.module.scss";
import Modal from "react-modal";
import { gsap } from "gsap";
import img1 from "img/ex/공모전_상장.png";
import img2 from "img/ex/ankkoMenu.png";
import img3 from "img/ex/ankkoDetailPage.png";
import { ArrowSVG } from "components/SVG";
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faXmark,
    faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { Mobile, PC } from "components/Responsive";
import link from "components/Link";

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
    const backImg1 = "https://source.unsplash.com/1rBg5YSi00c";
    const backImg2 = "https://source.unsplash.com/5TK1F5VfdIk";
    const backImg3 = "https://source.unsplash.com/SAQl58G-RYs";
    const scrollStop = () => {
        document.body.style.overflow = "hidden";
    };
    const scrollMove = () => {
        document.body.style.overflow = "unset";
    };
    const data = [
        {
            title: "제6회 4차 산업혁명 인재양성 공유·협업페스티발",
            platform: "한국정보통신보안윤리학회",
            project: "한국정보통신보안윤리학회",
            backImg: backImg1,
            img: img1,
            content:
                "한국정보통신보안윤리학회 주관 공모전 제6회 산업혁명 인재양성 공유·협업페스티발에 졸업작품 '레시피 공유 및 밀키트 판매 앱'을 출품해 캡스톤경진실적물/기타 부문에서 우수상을 수상했습니다.",
            url1: null,
            url2: null,
        },
        {
            title: "cooperation",
            platform: "ankko",
            project: "ankko",
            backImg: backImg2,
            img: img2,
            content:
                "식품 브랜드 '앙꼬'와 작업한 메뉴판입니다. 각 메뉴의 일러스트는 실제 이미지와 근접하도록 직접 그렸으며, 각 제품에 간단한 설명을 더해 쉬운 파악이 가능하도록 제작했습니다.",
            url1: null,
            url2: null,
        },
        {
            title: "cooperation",
            platform: "ankko",
            project: "ankko",
            backImg: backImg3,
            img: img3,
            content:
                "식품 브랜드 '앙꼬'와의 두 번째 작업으로, 판매 제품인 도라야끼의 상세 페이지와 제품 기한카드를 제작했습니다. 상세 페이지에는 제품의 종류 및 맛 설명, 다른 브랜드와의 차별화 등을 담았습니다. 기한카드는 상반기와 하반기 제품으로 나뉘어 있으며, 판매 제품들의 소비기한과 보관 방법을 작성했습니다. \n전문은 아래 링크인 사용처 혹은 피그마에서 확인하실 수 있습니다.",
            url1: link.outsource_use,
            url2: link.outsource_figma,
        },
    ];

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
                "-=0.15",
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
                    ease: "elastic.inOut(1,1)",
                    stagger: 0.15,
                },
                "-=0.15",
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
            {/* <PC>
                <div id="3" className={styles.ex_wrap}>
                    <h2>Experience</h2>
                    <hr />
                    <div className={styles.ex}>
                        <div className={styles.main_ex}>
                            <div className={styles.ex_img_wrap}>
                                <img src={img1} alt="공모전 상장 이미지" />
                                <span>확대하기</span>
                            </div>
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
                                            차별화 등을 담았습니다. 기한카드는
                                            상반기와 하반기 제품으로 나뉘어
                                            있으며, 판매 제품들의 소비기한과
                                            보관 방법을 작성했니다.
                                        </div>
                                        <div className={styles.ex_url_wrap}>
                                            <a
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
                                            </a>
                                            <a
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
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </PC> */}
            <PC>
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
                                    <div className={styles.title}>
                                        award / kind
                                    </div>
                                    <div className={styles.title}>
                                        platform / host
                                    </div>
                                    <div className={styles.title}>project</div>
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
                                                {s.title}
                                            </div>
                                            <div className={styles.content}>
                                                {s.platform}
                                            </div>
                                            <div className={styles.content}>
                                                {s.project}
                                            </div>
                                        </div>
                                        <div
                                            className={styles.gsap_bg}
                                            id={`${styles.gsap_bg}` + `${i}`}
                                        >
                                            <div className={styles.modal}>
                                                <img src={s.img} />
                                            </div>
                                            <div className={styles.modal}>
                                                <div
                                                    className={styles.close}
                                                    onClick={() => {
                                                        hide();
                                                        scrollMove();
                                                    }}
                                                >
                                                    close
                                                </div>
                                                <div
                                                    className={
                                                        styles.modal_content
                                                    }
                                                >
                                                    {s.content}
                                                    {s.url1 !== null &&
                                                    s.url2 !== null ? (
                                                        <>
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
