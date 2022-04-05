import React, { useEffect } from "react";
import { Container, Stack } from "@mui/material";
import { Content } from "../FormAbout/styles";
import CompThird from "./CompThird";
import CompFirst from "./CompFIrst";
import CompSec from "./CompSec";
import CompFour from "./CompFour";
import CompFive from "./CompFive";

export default function FormPrincipal() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Content>
            <Container maxWidth="lg">
                <Stack alignItems="center" spacing={2}>
                    <CompFirst />
                    <CompSec />                    
                </Stack>
            </Container>  
            <Stack>
                <CompThird />
                <CompFour />
                <CompFive />
            </Stack>
        </Content>
    )
}