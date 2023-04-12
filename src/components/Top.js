import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import styles from "css/Top.module.css";

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
    box-shadow: 0 17px 20px -20px rgba(0, 0, 0, 0.7);
    z-index: 100;
    font-family: "Courier Prime", monospace;
`;

const Side = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    };
    useEffect(() => {
        window.addEventListener("scroll", updateScroll);
    });
    return (
        <SideDiv
            className={
                scrollPosition < 700
                    ? `${styles.original_header}`
                    : `${styles.change_header}`
            }
        >
            <Link to="1" spy={true} smooth={true} className={styles.link}>
                About me
            </Link>
            <Link to="2" spy={true} smooth={true} className={styles.link}>
                Skills
            </Link>
            <Link to="3" spy={true} smooth={true} className={styles.link}>
                JS
            </Link>
            <Link to="4" spy={true} smooth={true} className={styles.link}>
                Archiving
            </Link>
            <Link to="5" spy={true} smooth={true} className={styles.link}>
                Experience
            </Link>
        </SideDiv>
    );
};

export default Side;
