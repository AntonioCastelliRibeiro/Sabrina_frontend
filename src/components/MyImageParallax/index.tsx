import React from "react";
import { Stack } from "@mui/material";
import { Parallax } from "react-parallax";
import { IPropsMyImageParallax } from "./interface";

export default function MyImageParallax(props: IPropsMyImageParallax){
    return (
        <Stack height={"inherit"}>
            <Parallax bgImageStyle={{opacity: .95}} style={{ height: "inherit" }} bgImage={props.image} strength={200}>
                {props.children}
            </Parallax>
        </Stack>
    )
}