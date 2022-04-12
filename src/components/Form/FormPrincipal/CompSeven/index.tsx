import { Container, Stack, useTheme } from "@mui/material";
import MyCrSelMaterial from "../../../MyCarrouselOpinion";
import CompDescTop from "../CompDescTop";

export default function CompSeven(){
    const theme = useTheme();
    return (
        <Stack pt={10}>
            <Container maxWidth="lg">
                <CompDescTop title="O que nossos clientes dizem?" subTitle="Saiba a opinião de quem utiliza nossos serviços" />
            </Container>
            <Container sx={{ [theme.breakpoints.down('sm')]: { p: 0 } }} maxWidth="xl">
                <MyCrSelMaterial />
            </Container>
        </Stack>
    )
}