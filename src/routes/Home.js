import React from "react";
import styled from "styled-components";
import Middle from "components/Middle";
import Top from "components/Top";
import Intro from "components/Intro";
import Reserve from "components/Reserve";
import { Mobile, PC, Tablet } from "components/Responsive";

const MainDiv = styled.div``;

const ContentDiv = styled.div`
    div {
    }
`;

const Home = () => {
    return (
        <MainDiv>
            <Top />
            <Intro />
            <ContentDiv>
                <Middle />
            </ContentDiv>
            <Reserve />
        </MainDiv>
    );
};

export default Home;
