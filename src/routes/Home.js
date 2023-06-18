import React from "react";
import styled from "styled-components";
import Middle from "components/Middle";
import Top from "components/Top";
import Intro from "components/Intro";
import { Mobile, PC, Tablet } from "components/Responsive";

const MainDiv = styled.div``;

const ContentDiv = styled.div``;

const Home = () => {
    return (
        <MainDiv>
            <Intro />
            <ContentDiv>
                <Top />
                <Middle />
            </ContentDiv>
        </MainDiv>
    );
};

export default Home;
