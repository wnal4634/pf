import React from "react";
import styled from "styled-components";
import Introduce from "components/Introduce";
import Skills from "components/Skills";
import Project from "components/Project";
import Experience from "components/Experience";
import Slide from "components/Slide";

const MiddleDiv = styled.div`
    div {
        display: flex;
    }
`;

const IntroBlock = styled.div`
    margin: 0 auto;
    @media (max-width: 768px) {
        padding: 5px 25px;
    }
`;

const Middle = () => {
    return (
        <MiddleDiv>
            <IntroBlock>
                <Introduce />
            </IntroBlock>
            <IntroBlock>
                <Skills />
            </IntroBlock>
            <IntroBlock>
                <Project />
            </IntroBlock>
            <IntroBlock>
                <Slide />
            </IntroBlock>
            <IntroBlock>
                <Experience />
            </IntroBlock>
        </MiddleDiv>
    );
};

export default Middle;
