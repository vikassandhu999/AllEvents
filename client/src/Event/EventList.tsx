import React from "react";
import {Col} from "../XShared/Components";
import {EventCard} from "./EventCard";
import styled from "styled-components";


const EventListWrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 100vh;
  overflow-y: scroll;
  padding: 0.5rem 1rem;
`;

export const EventList = () => {
    return (
        <EventListWrapper>
            {
                Array.from({length:10} , (_)=> {
                    return <EventCard/>
                })
            }

        </EventListWrapper>
    )
}