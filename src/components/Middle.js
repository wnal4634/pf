import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import styles from "css/Middle.module.css";
import Fade from "react-reveal/Fade";
import Introduce from "components/Introduce";
import Skills from "components/Skills";
import JsPractice from "components/JsPractice";
import Url from "components/Url";
import Experience from "components/Experience";

const MiddleDiv = styled.div`
    div {
        display: flex;
    }
`;

const IntroBlock = styled.div`
    margin: 100px auto 0;
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
            <Fade bottom>
                <IntroBlock>
                    <Introduce />
                </IntroBlock>
            </Fade>
            <Fade bottom>
                <IntroBlock>
                    <Skills />
                </IntroBlock>
            </Fade>
            <Fade bottom>
                <IntroBlock>
                    <JsPractice />
                </IntroBlock>
            </Fade>
            <Fade bottom>
                <IntroBlock>
                    <Url />
                </IntroBlock>
            </Fade>
            <Fade bottom>
                <IntroBlock>
                    <Experience />
                </IntroBlock>
            </Fade>
        </MiddleDiv>
    );
};

export default Middle;
