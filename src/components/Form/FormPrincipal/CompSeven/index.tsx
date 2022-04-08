import { Container, Stack } from "@mui/material";
import MyCrSelMaterial from "../../../MyCarrouselOpinion";
import CompDescTop from "../CompDescTop";

export default function CompSeven(){
    return (
        <Stack pt={10}>
            <Container maxWidth="lg">
                <CompDescTop title="O que nossos clientes dizem?" subTitle="Saiba a opinião de quem utiliza nossos serviços" />
            </Container>
            <MyCrSelMaterial />
        </Stack>

    )
}