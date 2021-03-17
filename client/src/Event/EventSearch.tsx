import React from "react";
import {Box, HeadingBig, Row} from "../XShared/Components";
import styled from "styled-components";
import {Button, PrimaryButton} from "../XShared/Components/Buttons";
import {withShadowLG} from "../XShared/Components/Rules";
import {EventList} from "./EventList";
import {DatePicker} from "../XShared/Components/DatePicker";

interface EventSearchModelProps {
    maxWidth ?: number;
}

const EventSearchModel = styled.div<EventSearchModelProps>`
  max-width: ${props=>props.maxWidth??900}px;
  min-height: 80vh;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-content: center;
  align-items: center;
  //background-color: #031920;
`;

const EventSearchInput = styled.input`
  border:#3a3e48 1px solid;
  padding: 0.6rem 1rem;
  border-radius: 0.2rem;
  background-color: #3a3939;
`;


const SearchInputButton = styled(Button)`
  width: 100%;
  padding: 0.6rem 2rem;
  //background-color: #f2f4f5;
    border:#96979a 1px solid;
    background-color: #fff;
`;

const InputRow = styled(Row)`
  background-color: #fff;
  border-radius: 0.2rem;
  ${withShadowLG};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 0.2rem;
`;

const SearchButton = styled(PrimaryButton)`
  padding: 0.6rem 2rem;
`;


const SearchResultWrapper = styled.div`
  min-height: 50vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-direction: column;
  //background-color: black;
`;

export const EventSearch = () => {
    return (
       <EventSearchModel maxWidth = {900}>
           <Box height={4}/>
            <InputRow padding={1}>
                <Grid>
                    <SearchInputButton>Location</SearchInputButton>
                    <SearchInputButton>From</SearchInputButton>
                    <SearchInputButton>To</SearchInputButton>
                    <SearchInputButton>Category</SearchInputButton>
                </Grid>

                <Box width={2}/>
                <SearchButton>Search</SearchButton>
            </InputRow>
           <SearchResultWrapper>
               <EventList/>
           </SearchResultWrapper>
       </EventSearchModel>
    )
}