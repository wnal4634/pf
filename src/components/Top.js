import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import styles from "css/Top.module.css";
import { Mobile, PC } from "components/Responsive";
import j_icon from "img/j_icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const SideDiv = styled.div`
    width: 100%;
    top: 0;
    left: 0;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    backdrop-filter: blur(5px);
    border-bottom: 1px solid #d6d6d6;
    z-index: 100;
    font-family: "Pretendard-Regular";
`;

const Side = () => {
    const [isToggled, setIsToggled] = useState(false);
    const goTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    const appearInitial = useRef();
    const appearLink_1 = useRef();
    const appearLink_2 = useRef();
    const appearLink_3 = useRef();
    const appearLink_4 = useRef();
    const appearLink_5 = useRef();
    useEffect(() => {
        gsap.from(appearInitial.current, {
            x: -20,
            opacity: 0,
            duration: 1,
            delay: 0.5,
        });
        gsap.from(appearLink_1.current, {
            x: -20,
            opacity: 0,
            duration: 1,
            delay: 1,
        });
        gsap.from(appearLink_2.current, {
            x: -20,
            opacity: 0,
            duration: 1,
            delay: 1.5,
        });
        gsap.from(appearLink_3.current, {
            x: -20,
            opacity: 0,
            duration: 1,
            delay: 2,
        });
        gsap.from(appearLink_4.current, {
            x: -20,
            opacity: 0,
            duration: 1,
            delay: 2.5,
        });
        gsap.from(appearLink_5.current, {
            x: -20,
            opacity: 0,
            duration: 1,
            delay: 3,
        });
    }, []);

    return (
        <>
            <PC>
                <SideDiv className={styles.header}>
                    <div className={styles.initial} ref={appearInitial}>
                        <img
                            src={j_icon}
                            width={25}
                            alt="이니셜 아이콘"
                            onClick={goTop}
                        />
                    </div>
                    <div className={styles.nav}>
                        <Link
                            to="1"
                            spy={true}
                            smooth={true}
                            className={styles.link}
                        >
                            <div ref={appearLink_1}>About me</div>
                        </Link>
                        <Link
                            to="2"
                            spy={true}
                            smooth={true}
                            className={styles.link}
                        >
                            <div ref={appearLink_2}>Skills</div>
                        </Link>
                        <Link
                            to="3"
                            spy={true}
                            smooth={true}
                            className={styles.link}
                        >
                            <div ref={appearLink_3}>Project</div>
                        </Link>
                        <Link
                            to="4"
                            spy={true}
                            smooth={true}
                            className={styles.link}
                        >
                            <div ref={appearLink_4}>Awards</div>
                        </Link>
                    </div>
                </SideDiv>
            </PC>
            <Mobile>
                <SideDiv className={styles.header}>
                    {isToggled ? (
                        <div className={styles.nav_mobile}>
                            <FontAwesomeIcon
                                icon={faXmark}
                                onClick={() => {
                                    setIsToggled(!isToggled);
                                }}
                                size="lg"
                            />
                            <ul className={styles.toggle_menu}>
                                <li className={styles.menu_item}>
                                    <Link
                                        to="1"
                                        spy={true}
                                        smooth={true}
                                        className={styles.link}
                                    >
                                        About me
                                    </Link>
                                </li>
                                <li className={styles.menu_item}>
                                    <Link
                                        to="2"
                                        spy={true}
                                        smooth={true}
                                        className={styles.link}
                                    >
                                        Skills
                                    </Link>
                                </li>
                                <li className={styles.menu_item}>
                                    <Link
                                        to="3"
                                        spy={true}
                                        smooth={true}
                                        className={styles.link}
                                    >
                                        Project
                                    </Link>
                                </li>
                                <li className={styles.menu_item}>
                                    <Link
                                        to="4"
                                        spy={true}
                                        smooth={true}
                                        className={styles.link}
                                    >
                                        Awards
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <div className={styles.initial_mobile}>
                            <img
                                src={j_icon}
                                width={25}
                                alt="이니셜 아이콘"
                                onClick={goTop}
                            />
                            <FontAwesomeIcon
                                icon={faBars}
                                onClick={() => {
                                    setIsToggled(!isToggled);
                                }}
                                size="lg"
                            />
                        </div>
                    )}
                </SideDiv>
            </Mobile>
        </>
    );
};

export default Side;
