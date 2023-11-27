import React from "react";
import styled from "styled-components";
import Introduce from "components/Introduce";
import Skills from "components/Skills";
import JsPractice from "components/Project";
import Awards from "components/Awards";

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
                <JsPractice />
            </IntroBlock>
            <IntroBlock>
                <Awards />
            </IntroBlock>
        </MiddleDiv>
    );
};

export default Middle;
