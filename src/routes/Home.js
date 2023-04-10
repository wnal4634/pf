import React, { useState } from "react";
import { Timeline, Tween } from "react-gsap";
import styled from "styled-components";
import Middle from "components/Middle";
import Top from "components/Top";
import Intro from "components/Intro";

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
