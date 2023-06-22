import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import styles from "css/Top.module.css";
import { Mobile, Tablet, PC } from "components/Responsive";
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
    padding: 10px 0;
    backdrop-filter: blur(5px);
    // box-shadow: 0 17px 10px -20px rgba(0, 0, 0, 0.7);
    border-bottom: 1px solid #d6d6d6;
    z-index: 100;
    font-family: "Courier Prime", monospace;
`;

const Side = () => {
    const [isToggled, setIsToggled] = useState(false);
    const appearLink_1 = useRef();
    const appearLink_2 = useRef();
    const appearLink_3 = useRef();
    const appearLink_4 = useRef();
    const appearLink_5 = useRef();
    useEffect(() => {
        gsap.from(appearLink_1.current, {
            x: -20,
            opacity: 0,
            duration: 1,
            delay: 2,
        });
        gsap.from(appearLink_2.current, {
            x: -20,
            opacity: 0,
            duration: 1,
            delay: 2.5,
        });
        gsap.from(appearLink_3.current, {
            x: -20,
            opacity: 0,
            duration: 1,
            delay: 3,
        });
        gsap.from(appearLink_4.current, {
            x: -20,
            opacity: 0,
            duration: 1,
            delay: 3.5,
        });
        gsap.from(appearLink_5.current, {
            x: -20,
            opacity: 0,
            duration: 1,
            delay: 4,
        });
    }, []);

    return (
        <>
            <PC>
                <SideDiv className={styles.header}>
                    <div className={styles.initial}>
                        <img src={j_icon} width={25} />
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
                            <div ref={appearLink_3}>JS</div>
                        </Link>
                        <Link
                            to="4"
                            spy={true}
                            smooth={true}
                            className={styles.link}
                        >
                            <div ref={appearLink_4}>Experience</div>
                        </Link>
                    </div>
                </SideDiv>
            </PC>
            <Tablet>
                <SideDiv className={styles.header}>
                    <div className={styles.initial}>
                        <img src={j_icon} width={25} />
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
                            <div ref={appearLink_3}>JS</div>
                        </Link>
                        <Link
                            to="4"
                            spy={true}
                            smooth={true}
                            className={styles.link}
                        >
                            <div ref={appearLink_4}>Experience</div>
                        </Link>
                    </div>
                </SideDiv>
            </Tablet>
            <Mobile>
                <SideDiv className={styles.header}>
                    {isToggled ? (
                        <div>
                            <FontAwesomeIcon
                                icon={faXmark}
                                onClick={() => {
                                    setIsToggled(!isToggled);
                                }}
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
                                        JS
                                    </Link>
                                </li>
                                <li className={styles.menu_item}>
                                    <Link
                                        to="4"
                                        spy={true}
                                        smooth={true}
                                        className={styles.link}
                                    >
                                        Experience
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <div className={styles.initial_mobile}>
                            <img src={j_icon} width={25} />
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
