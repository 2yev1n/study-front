import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Menu = () => {
    const menuArr = [
        { key: "회사 소개", value: "/introduction" },
        { key: "남품 실적 갤러리", value: "/gallery" },
        { key: "커뮤니티", value: "/community" },
        { key: "상담 문의", value: "/consulting" }
    ];

    return (
        <>
            <Container>
                <SubContainer>
                    <MenuList>
                        {menuArr.map((e, idx) => {
                            return (
                                <ListItem>
                                    <Link
                                        key={idx}
                                        to={e.value}
                                    >
                                        {e.key}
                                    </Link>
                                </ListItem>
                            )
                        })}
                    </MenuList>
                </SubContainer>
            </Container>
        </>
    )
};

const Container = styled.header`
    backgroud-color: white;
    height: 70px;
    box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.1);
    display: flex;
    justify-content: center;
    padding: 0 400px;

`;
const SubContainer = styled.div`
    width: 1000px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const MenuList = styled.ul`
    display: flex;
    gap: 85px;
    list-style:none;
    padding: 0;
`;

const ListItem = styled.li`
    &:hover  { 
        color: black;
        font-weight: bold;
    }

    font-size: 16px;
    color: black;
    text-decoration: none;
`;

export default Menu;