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
            <Stack spacing={4} >
                <Container maxWidth="lg">
                        <CompFirstAbout />
                </Container>
                <CompSecAbout />  
            </Stack>
        </Content>
    )
}