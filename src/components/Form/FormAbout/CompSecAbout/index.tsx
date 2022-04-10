import { Box, Container, Grid, useMediaQuery, useTheme } from "@mui/material";
import AccordionBoubt from "../../../MyAccordionBoubt";
import MyImageParallax from "../../../MyImageParallax";
import CompDescTop from "../../FormPrincipal/CompDescTop";
import { TransitionComp } from "../../FormPrincipal/CompDescTop/styles";
import { transition } from "../motion";
import { dataCompSecAbout } from "./data";

const imgParallax = "https://images.unsplash.com/photo-1636574879131-5f3cd5c8a8e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1339&q=80";

export default function CompSecAbout(){
    const theme = useTheme();
    const isSm = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <Box height="100%">
            <MyImageParallax image={imgParallax}>
                <Container maxWidth="lg" sx={{ padding: 20, [theme.breakpoints.down('md')] : {padding: 2}}}>
                    <TransitionComp {...transition}>
                        <CompDescTop title="Dúvidas Frequentes" subTitle="Alguma das dúvidas que as pessoas tem referente aos nossos serviços" />
                        <Grid spacing={isSm ? 0 : 2} container sx={{ margin: 0, pr: isSm ? 0 : "30px" }}>
                            {dataCompSecAbout.map((data, key) => (
                                <Grid key={key} pt={isSm ? 2 : 0} item xs={12} sm={12} md={4} lg={4} xl={4}>
                                    <AccordionBoubt title={data.title} desc={data.desc} />
                                </Grid>
                            ))}
                        </Grid>
                    </TransitionComp> 
                </Container>
            </MyImageParallax>
        </Box>
    )
}