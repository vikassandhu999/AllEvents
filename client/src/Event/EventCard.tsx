import React from "react";
import styled from "styled-components";
import {withShadowLG, withShadowMD} from "../XShared/Components/Rules";
import {Box, HeadingBig, Para, Row} from "../XShared/Components";

const EventCardWrapper = styled.div`
  ${withShadowLG};
  width: 100%;
  padding: 1rem 2rem;
  border-radius: 0.2rem;
  background-color: #fff;
  margin-bottom: 1rem;
  border-left: 4px solid #333;
`;

const EventTitle = styled(HeadingBig)`
  font-size: 1.5rem;
`;

const PriceText = styled(Para)`
  font-size: 1rem;
  color: #3cd05c;
  font-weight: 800;
`;

const LocationText = styled(Para)`
  font-size: 1rem;
  color: #e91313;
  font-weight: 800;
`;

export const EventCard = () => {
    return (
        <EventCardWrapper>
            <Row full={true} justifyContent={"flex-start"}>
                <Para>Timing :  4:30 to 5:30 on 22 March</Para>
            </Row>
            <Box height={0.5}/>
            <Row full={true} justifyContent={"flex-start"}>
                <EventTitle>Vir das comedy show</EventTitle>
            </Row>
            <Row full={true} justifyContent={"flex-start"}>
                <Para>Performer(s) : </Para><Para>Vir Das, Vikas Sandhu</Para>
            </Row>
            <Box height={0.5}/>
            <Row full={true} justifyContent={"flex-start"}>
                <Para>Location : </Para>
                <Box width={0.5}/>
                <LocationText>Central Plaza</LocationText>
                <Box width={1}/>
                <Para>Price : </Para>
                <Box width={0.5}/>
                <PriceText>900/-</PriceText>
            </Row>
            <Box height={0.5}/>
            <Row full={true} justifyContent={"flex-start"}>
                <Para size={1}>More Details</Para>
            </Row>
        </EventCardWrapper>
    )
}