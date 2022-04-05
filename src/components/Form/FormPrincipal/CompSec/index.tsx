import React from "react";
import { dataDesc } from "./data";
import { TransitionComp } from "./styles";

import { transition } from "../../FormAbout/motion";
import CompDescTop from "../CompDescTop";
import HoverComp from "./HoverComp";
import { Stack } from "@mui/material";

export default function CompSec() {
    return (
        <TransitionComp {...transition} >
            <Stack pt={10}>
                <CompDescTop title={dataDesc.title} subTitle={dataDesc.subTitle} />
                <HoverComp />
            </Stack>
        </TransitionComp>
    )
}