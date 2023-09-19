import React from "react";
import styled from "styled-components";
import Middle from "components/Middle";
import Top from "components/Top";
import Reserve from "components/Reserve";

const MainDiv = styled.div``;

const ContentDiv = styled.div`
    div {
    }
`;

const Home = () => {
    return (
        <MainDiv>
            <Top />
            <ContentDiv>
                <Middle />
            </ContentDiv>
            <Reserve />
        </MainDiv>
    );
};

export default Home;
