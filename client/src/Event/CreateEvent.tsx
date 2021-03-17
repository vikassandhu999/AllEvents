import React from "react";
import styled from "styled-components";
import {Box, ContainerCenter, Para, Row,Col} from "../XShared/Components";
import {PrimaryButton} from "../XShared/Components/Buttons";
import {SelectInput, TextAreaInput, TextInput} from "../XShared/Components/Inputs";

const CreateEventWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  background-color: #fff;
`;

export const CreateEvent = () => {
    return (
        <ContainerCenter>
            <CreateEventWrapper>
                <Box height={2}/>
                <Row full={true}>
                    <Para size={1.2}>Ready to host? Create an event and let the world know</Para>
                </Row>
                <Box height={2}/>
                <Col padding={1}>
                    <TextInput
                        label={"Event Name"}
                        name={"password"}
                        htmlFor={"password"}
                    />
                    <Box height={0.5}/>
                    <TextAreaInput
                        label={"Event Description"}
                        name={"password"}
                        htmlFor={"password"}
                    />
                    <Box height={0.5}/>
                    <SelectInput label={"Event Type"} htmlFor={"eventType"} name={"eventType"}/>
                    <Box height={1}/>
                    <Row full={true} justifyContent={"flex-start"}>
                        <PrimaryButton>
                            Create Event
                        </PrimaryButton>
                    </Row>
                </Col>
            </CreateEventWrapper>
        </ContainerCenter>
    )
}