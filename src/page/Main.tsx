import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import Menu from "../component/Menu"
const Main = () => {
    return (
        <><Menu /><ContentWrap>
            <Title>About</Title>
            <Content>Hello there.<br />How do you do?</Content>
        </ContentWrap></>

    );
}

const ContentWrap = styled.p`
    display: flex;
    gap: 32px;
    justify-content: center;
`;

const Content = styled.p`
    font-size: 20px;
    color: #ffc0cb;
    margin: 0;
`;

const Title = styled.p`
    font-size: 40px;
    font-weight: bold;
    margin: 5px;
    padding: 0;
`;

export default Main;