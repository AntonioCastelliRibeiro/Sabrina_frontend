import { Container, Stack } from "@mui/material";
import { useEffect } from "react";
import MyCarrouselHover from "../../../MyCarrouselHover";
import CompDescTop from "../CompDescTop";

export default function CompFour(){
    return (
        <Container maxWidth="lg">
            <Stack pt={10}>
                <CompDescTop title="Quem contrata nossos serviços?" subTitle="A resposta está abaixo" />
                <MyCarrouselHover />
            </Stack>
        </Container>
    )
}