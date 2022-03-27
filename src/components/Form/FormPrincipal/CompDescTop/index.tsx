import React from "react";
import { Stack, useTheme } from "@mui/material";
import { ContainerComp, Content, TransitionComp, TypograpySubTitle, TypograpyTitle } from "./styles";
import { transition } from "../../FormAbout/motion";
import { IData } from "./interface";

export default function CompDescTop(props: IData) {
    const theme = useTheme();

    return (
        <ContainerComp theme={theme} maxWidth="lg" >
            <TransitionComp {...transition} >
                <Content spacing={2}>
                    <Stack alignItems="center" pb={4} pt={2} spacing={2} >
                        <TypograpyTitle theme={theme} children={props.title} />
                        <ContainerComp theme={theme} maxWidth="sm" >
                            <TypograpySubTitle theme={theme} children={props.subTitle} />
                        </ContainerComp>
                    </Stack>
                </Content>
            </TransitionComp>
        </ContainerComp>
    )
}