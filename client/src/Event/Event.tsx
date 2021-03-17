import React from "react";
import {Box, Col, ContainerCenter, HDivider, HeadingBig, ImgAvatar, Para, Row} from "../XShared/Components";
import styled from "styled-components";
import {PrimaryButton} from "../XShared/Components/Buttons";
import {Tabs} from "../XShared/Components/Tabs";
import {withShadowLG} from "../XShared/Components/Rules";

const EventWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  background-color: #fff;
`;

const EventTitle = styled(HeadingBig)`
  font-size: 1.2rem;
  font-family: 'Poppins', sans-serif;
  color:#757373;
`;

const EventInfoText = styled(HeadingBig)`
  font-size: 1.2rem;
  font-weight: 400;
`;

const EventPoster = styled.img`
  max-height: 40vh;
  display: block;
  object-fit: contain;
  background-color: rgba(242,244,242,0.8);
  position: relative;
  
  &:after{
    position: absolute;
    background-image: url("${props=>props.src}");
    background-color: rgba(242,244,242,0.8);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;
  }
`;

const BookButton = styled(PrimaryButton)`
  padding: 0.6rem 2rem;
`;

const XPara = styled(Para)`
  font-weight: 600;
`;

const PerformerCard = styled.div`
  display: flex;
  max-width: 300px;
  min-width: 200px;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  min-height: 100px;
  padding: 0.3rem;
  background-color: #fff;
  border: 1px solid #E5E5E5;
  border-radius: 0.2rem;
  ${withShadowLG};
`;

const PerformerName = styled(HeadingBig)`
  font-weight: 500;
  font-size: 1rem;
`;

const Performer = () => {
    return (
        <PerformerCard>
                <PerformerName>Harsh Gujral</PerformerName>
                <Box height={0.4}/>
                <ImgAvatar
                    width={"80px"}
                    src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReriDdeolSfL_BPwDCIU1k1HXgrSVnDlktXg&usqp=CAU"}
                    alt={"User Profile"}
                />
               <Box height={1}/>
        </PerformerCard>
    )
}

export const Event = () => {
    return (
        <ContainerCenter>
            <EventWrapper>
                <EventPoster
                    src={"https://in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-jo-bolta-hai-wohi-hota-hai-feat-harsh-gujral-2020-10-7-t-14-32-3.jpg"}
                    alt={"Event Poster"}
                />
                <Box height={0.4}/>
                <Row padding={1} full={true} alignItems={"flex-start"} justifyContent={"space-between"}>
                    <Row justifyContent={"space-between"} full={true}>
                        <Col alignContent={"flex-start"} justifyContent={"flex-start"} alignItems={"flex-start"}>
                            <EventTitle>Jo Bolta Hai Wohi Hota Hai feat Harsh Gujral</EventTitle>
                            <Box height={0.2}/>
                            <EventInfoText>
                                Comedy | 16+ yrs | 1h 20 minutes
                            </EventInfoText>
                        </Col>
                        <Col>
                            <BookButton>
                                Book
                            </BookButton>
                        </Col>
                    </Row>
                </Row>

                <Row padding={0.5} full={true} justifyContent={"flex-start"}>
                    <XPara size={1}>
                        Friday 19 March, 2021
                    </XPara>
                    <Box width={1}/>
                    <XPara size={1}>
                        Venue : Hotel Modern Plaza Jalandhar
                    </XPara>
                </Row>
                <Box height={1}/>
                <HDivider lineHeight={0.1}/>
                <Box height={1}/>
                <Row padding={1} full={true} justifyContent={"flex-start"} alignContent={"flex-start"} alignItems={"flex-start"}>
                    <Col>
                        <Para>Performer(s)</Para>
                        <Box height={1}/>
                        <Performer/>
                        <Box height={0.5}/>
                        <Performer/>
                    </Col>
                    <Tabs/>
                </Row>

            </EventWrapper>
        </ContainerCenter>
    )
}