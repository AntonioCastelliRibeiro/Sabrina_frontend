import React from "react";
import { Stack } from "@mui/material";
import { Parallax } from "react-parallax";
import { IPropsMyImageParallax } from "./interface";

export default function MyImageParallax(props: IPropsMyImageParallax){
    return (
        <Stack sx={{ height: "inherit", borderRadius: "9px" }}>
            <Parallax bgImageStyle={{ opacity: .70 }} style={{ height: "inherit", borderRadius: "9px" }} bgImage={props.image} strength={300}>
                {props.children}
            </Parallax>
        </Stack>
    )
}