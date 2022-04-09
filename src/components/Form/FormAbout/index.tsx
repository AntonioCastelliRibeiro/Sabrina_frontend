import React, { useEffect } from "react";
import { Container, Stack } from "@mui/material";
import { Content } from "./styles";
import CompFirstAbout from "./CompFirstAbout";
import CompSecAbout from "./CompSecAbout";

export default function FormAbout() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Content>
            <Container maxWidth="lg">
                <Stack spacing={2} >
                    <CompFirstAbout />
                    <CompSecAbout />                   
                </Stack>
            </Container>
        </Content>
    )
}