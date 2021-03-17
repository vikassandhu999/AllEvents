import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {Box, ContainerCenter, HeadingBig, ImgAvatar, InlineFlex, Row} from "../Components";
import {PrimaryButton} from "../Components/Buttons";

const HeaderContainer = styled.header`
    display:flex;
    width:100%;
    height: max-content;
    background-color: #ffffff;
    border-bottom: 1px solid #E5E5E5;
`;

const HeaderTextLogo = styled(HeadingBig)`
  font-weight: 600;
  font-size: 1.8rem;
  font-family: 'Blinker', sans-serif;

`;

const HeaderNav = styled.div`
  display:inline-flex;
  margin: 0;
  padding: 0;
`;

const HeaderNavigationLink = styled(Link)`
    padding:0;
    margin-right: 0.4rem;
    margin-left: 0.4rem;
    color: #111111;
    display: inline-flex;
    justify-content: center;
    align-items: center;
`;

export const Header = () => {
    return (
        <HeaderContainer>
            <ContainerCenter>
                <Row padding={0.6} full={true} justifyContent={"space-between"}>
                    <HeaderTextLogo>AllEvents</HeaderTextLogo>
                    <Row>
                        <PrimaryButton>
                            Create Event
                        </PrimaryButton>
                        <Box width={1}/>
                        <Row>
                            <ImgAvatar
                                width={"40px"}
                                src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReriDdeolSfL_BPwDCIU1k1HXgrSVnDlktXg&usqp=CAU"}
                                alt={"User Profile"}
                            />
                        </Row>
                    </Row>
                </Row>
            </ContainerCenter>
        </HeaderContainer>
    )
}