import React from "react";
import { Container, useTheme } from "@mui/material";
import { Content, TypograpyComp } from "./styles";
import { ContainerComp, TransitionComp } from "../../FormPrincipal/CompDescTop/styles";
import { transition } from "../../FormAbout/motion";

export default function CompDescTop() {
    const theme = useTheme();
    return (
        <TransitionComp {...transition}>
            <ContainerComp theme={theme} maxWidth="sm" >
                    <Content spacing={2}>
                        <TypograpyComp color={"secondary"} theme={theme} children="Trabalhos Disponíveis" />
                    </Content>
            </ContainerComp>
        </TransitionComp>
    )
}