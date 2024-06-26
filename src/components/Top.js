import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import styles from "css/Top.module.scss";
import { Mobile, PC } from "components/Responsive";
import j_icon from "img/j_icon.png";
import logo from "img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Side = () => {
    const [isToggled, setIsToggled] = useState(false);
    const appearLink = useRef();
    const v2 = "https://wnal4634.github.io/pf_v2/";
    const goTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        gsap.from(appearLink.current, {
            y: -5,
            opacity: 0,
            duration: 1,
            delay: 0.5,
            ease: "expo.out",
        });
    }, []);

    const reload = () => {
        window.location.reload();
    };

    return (
        <>
            <PC>
                <div className={styles.header}>
                    <div className={styles.header_wrap}>
                        <div className={styles.initial} onClick={reload}>
                            <img src={logo} />
                        </div>
                        <div className={styles.nav} ref={appearLink}>
                            <Link
                                to="1"
                                spy={true}
                                smooth={true}
                                className={styles.link}
                            >
                                <div>skills</div>
                            </Link>
                            <Link
                                to="2"
                                spy={true}
                                smooth={true}
                                className={styles.link}
                            >
                                <div>projects</div>
                            </Link>
                            <Link
                                to="3"
                                spy={true}
                                smooth={true}
                                className={styles.link}
                            >
                                <div>experience</div>
                            </Link>
                            <Link
                                to="4"
                                spy={true}
                                smooth={true}
                                className={styles.link}
                            >
                                <div>contact me</div>
                            </Link>
                            <a href={v2} className={styles.link}>
                                <div>v2</div>
                            </a>
                        </div>
                    </div>
                </div>
            </PC>
            <Mobile>
                <div className={styles.header}>
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
                                        skills
                                    </Link>
                                </li>
                                <li className={styles.menu_item}>
                                    <Link
                                        to="2"
                                        spy={true}
                                        smooth={true}
                                        className={styles.link}
                                    >
                                        projects
                                    </Link>
                                </li>
                                <li className={styles.menu_item}>
                                    <Link
                                        to="3"
                                        spy={true}
                                        smooth={true}
                                        className={styles.link}
                                    >
                                        experience
                                    </Link>
                                </li>
                                <li className={styles.menu_item}>
                                    <Link
                                        to="4"
                                        spy={true}
                                        smooth={true}
                                        className={styles.link}
                                    >
                                        contact me
                                    </Link>
                                </li>
                                <li className={styles.menu_item}>
                                    <a href={v2} className={styles.link}>
                                        v2
                                    </a>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <div className={styles.initial_mobile}>
                            <div className={styles.initial} onClick={reload}>
                                <img src={logo} />
                            </div>
                            <FontAwesomeIcon
                                icon={faBars}
                                onClick={() => {
                                    setIsToggled(!isToggled);
                                }}
                                size="lg"
                            />
                        </div>
                    )}
                </div>
            </Mobile>
        </>
    );
};

export default Side;
