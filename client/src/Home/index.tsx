import React from "react";
import {Wrapper} from "../XShared/Components";
import {Header} from "../XShared/Header/Header";
import {Home} from "./Home";

export const HomeRouter = () => {
    return (
        <Wrapper>
            <Header/>
            <Home/>
        </Wrapper>
    );
}