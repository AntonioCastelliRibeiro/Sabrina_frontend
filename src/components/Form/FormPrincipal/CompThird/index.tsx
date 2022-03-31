import React from "react";
import { dataDesc } from "./data";
import { TransitionComp } from "./styles";

import { transition } from "../../FormAbout/motion";
import CompDescTop from "../CompDescTop";
import HoverComp from "./HoverComp";

export default function CompThird() {
    return (
        <TransitionComp {...transition} >
            <CompDescTop title={dataDesc.title} subTitle={dataDesc.subTitle} />
            <HoverComp />
        </TransitionComp>
    )
}