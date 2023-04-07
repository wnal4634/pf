import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import styles from "css/Middle.module.css";
import Fade from "react-reveal/Fade";
import Introduce from "components/Introduce";
import Skills from "components/Skills";
import JsPractice from "components/JsPractice";
import Prize from "components/Prize";
import Experience from "components/Experience";

const MiddleDiv = styled.div`
    div {
        height: 300px;
    }
`;

const IntroBlock = styled.div`
    margin-bottom: 135px;
    @media (max-width: 768px) {
        padding: 25px;
    }

    h1 {
        margin: 0;
        font-weight: 300;
        font-size: 45px;
        @media (max-width: 768px) {
            font-size: 30px;
        }
    }
    h3 {
        font-weight: 200;
        font-size: 15px;
    }
`;

const Middle = () => {
    return (
        <MiddleDiv>
            <Introduce />
            <Skills />
            <Fade bottom>
                <IntroBlock>
                    <JsPractice />
                </IntroBlock>
            </Fade>
            <Prize />
            <Experience />
        </MiddleDiv>
    );
};

export default Middle;
