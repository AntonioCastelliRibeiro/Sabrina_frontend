import React, { useEffect } from "react";
import CompDescTop from "./CompDescTop";
import { Container, useTheme, Stack } from "@mui/material";
import { Content } from "../FormAbout/styles";
import { dataDesc } from "./data";
import CompHoverSec from "./CompHoverSec";
import CompThird from "./CompThird";
import CompFour from "./CompFour";
import CompFive from "./CompFive";

export default function FormPrincipal() {
    const theme = useTheme();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Content bgcolor={theme.palette.primary.dark}>
            <Container maxWidth="lg">
                <Stack alignItems="center" spacing={2}>
                    <CompDescTop title={dataDesc.title} subTitle={dataDesc.subTitle} />
                    <CompHoverSec />
                    <CompThird />                    
                </Stack>
            </Container>  
            <Stack>
                <CompFour />
                <CompFive />
            </Stack>
        </Content>
    )
}