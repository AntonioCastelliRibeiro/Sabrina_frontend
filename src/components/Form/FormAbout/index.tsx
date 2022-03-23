import React, { useEffect } from "react";
import { Container, Stack, Typography, useTheme } from "@mui/material";
import { CardActionAreaComp, CardMediaComp, Content, IrFrameComp } from "./styles";
import { data } from "./data";
import { transition } from "./motion";
import { TransitionComp, TypograpySubTitle } from "../FormPrincipal/CompDescTop/styles";

export default function FormAbout() {
    const theme = useTheme();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Content bgcolor={theme.palette.primary.dark} >
            <Container maxWidth="lg">
                <Stack spacing={3} >
                    <TransitionComp {...transition}>
                        <CardActionAreaComp>
                            <CardMediaComp image={data.imgCapa} />
                        </CardActionAreaComp>
                    </TransitionComp>

                    <TransitionComp {...transition}>
                        <TypograpySubTitle theme={theme} color={theme.palette.secondary.light} variant="h5" textAlign="left" children={data.textFirst} />
                        <TypograpySubTitle theme={theme} color={theme.palette.secondary.light} variant="h5" textAlign="left" children={data.textSec} />
                        <TypograpySubTitle theme={theme} color={theme.palette.secondary.light} variant="h5" textAlign="left" children={data.textThird} />
                        <Typography color={theme.palette.secondary.light} variant="h6" textAlign="left" children={"Localização do studio:"} />
                    </TransitionComp>

                    <IrFrameComp src={data.linkMaps} loading="lazy" />
                </Stack>
            </Container>
        </Content>
    )
}