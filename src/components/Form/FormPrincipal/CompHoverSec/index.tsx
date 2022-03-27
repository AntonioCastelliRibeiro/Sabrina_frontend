import React from "react";
import { Grid, Stack, useTheme } from "@mui/material";
import { data } from "./data";
import { CardActionAreaComp, ContainerComp, TransitionComp, TypograpySubTitle, TypograpyTitle } from "./styles";

import { transition } from "../../FormAbout/motion";

export default function CompHoverSec() {
    const theme = useTheme();

    return (
        <ContainerComp theme={theme} maxWidth="lg" >
            <TransitionComp {...transition} >
                <Grid container spacing={2} style={{ margin: 0, width: "100%" }}>
                    {data.map((data, key) => (
                        <Grid
                            item
                            key={key}
                            style={{ margin: 0 }}
                            xs={12}
                            sm={12}
                            md={6}
                            lg={4}
                            xl={4}
                        >
                            <CardActionAreaComp theme={theme}>
                                <Stack alignItems={"center"} spacing={2}>
                                    <div children={data.icon} />
                                    <TypograpyTitle theme={theme} children={data.title} />
                                    <ContainerComp theme={theme} maxWidth="sm" >
                                        <TypograpySubTitle theme={theme} children={data.subtitle} />
                                    </ContainerComp>
                                </Stack>
                            </CardActionAreaComp>
                        </Grid>
                    ))}
                </Grid>
            </TransitionComp>
        </ContainerComp >

    )
}