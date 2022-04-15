import { Container, Stack } from "@mui/material";
import CardInfo from "../../../MyCardInfo";
import MyCarrouselHover from "../../../MyCarrouselHover";
import CompDescTop from "../CompDescTop";

export default function CompFour(){
    // return <CardInfo />
    return (
        <Container maxWidth="lg">
            <Stack pt={10}>
                <CompDescTop title="Quem contrata nossos serviços?" subTitle="A resposta está abaixo" />
                <MyCarrouselHover />
            </Stack>
        </Container>
    )
}