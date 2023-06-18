import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import styles from "css/Top.module.css";
import { Mobile, Tablet, PC } from "components/Responsive";

const SideDiv = styled.div`
    width: 100%;
    top: 0;
    left: 0;
    position: fixed;
    display: flex;
    justify-content: space-around;
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
                        <div ref={appearLink_4}>Archiving</div>
                    </Link>
                    <Link
                        to="5"
                        spy={true}
                        smooth={true}
                        className={styles.link}
                    >
                        <div ref={appearLink_5}>Experience</div>
                    </Link>
                </SideDiv>
            </PC>
            <Tablet>
                <SideDiv className={styles.header}>
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
                        <div ref={appearLink_4}>Archiving</div>
                    </Link>
                    <Link
                        to="5"
                        spy={true}
                        smooth={true}
                        className={styles.link}
                    >
                        <div ref={appearLink_5}>Experience</div>
                    </Link>
                </SideDiv>
            </Tablet>
            <Mobile>
                <SideDiv className={styles.header}>
                    {isToggled ? (
                        <ul>
                            <li>
                                <Link
                                    to="1"
                                    spy={true}
                                    smooth={true}
                                    className={styles.link}
                                >
                                    About me
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="2"
                                    spy={true}
                                    smooth={true}
                                    className={styles.link}
                                >
                                    Skills
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="3"
                                    spy={true}
                                    smooth={true}
                                    className={styles.link}
                                >
                                    JS
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="4"
                                    spy={true}
                                    smooth={true}
                                    className={styles.link}
                                >
                                    Archiving
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="5"
                                    spy={true}
                                    smooth={true}
                                    className={styles.link}
                                >
                                    Experience
                                </Link>
                            </li>
                        </ul>
                    ) : (
                        <div></div>
                    )}
                </SideDiv>
            </Mobile>
        </>
    );
};

export default Side;
