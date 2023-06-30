import React from "react";
import styled from "styled-components";
import styles from "css/Middle.module.css";
import Fade from "react-reveal/Fade";
import Introduce from "components/Introduce";
import Skills from "components/Skills";
import JsPractice from "components/Project";
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
            {/* <Fade bottom>
                <IntroBlock>
                    <Url />
                </IntroBlock>
            </Fade> */}
            <Fade bottom>
                <IntroBlock>
                    <Experience />
                </IntroBlock>
            </Fade>
        </MiddleDiv>
    );
};

export default Middle;
