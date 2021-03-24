import React from "react";
import {ContainerCenter} from "../XShared/Components";
import {EventSearch} from "../Event/EventSearch";
import {Event} from "../Event/Event";
import {CreateEvent} from "../Event/CreateEvent";

export const Home = () => {
    return (
      <ContainerCenter>
          {/*<EventSearch/>*/}
          <Event/>
          {/*<CreateEvent/>*/}
      </ContainerCenter>
    );
}