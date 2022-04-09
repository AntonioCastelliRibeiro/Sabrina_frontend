import { Grid, useMediaQuery, useTheme } from "@mui/material";
import AccordionBoubt from "../../../MyAccordionBoubt";
import CompDescTop from "../../FormPrincipal/CompDescTop";
import { TransitionComp } from "../../FormPrincipal/CompDescTop/styles";
import { transition } from "../motion";
import { dataCompSecAbout } from "./data";

export default function CompSecAbout(){
    const theme = useTheme();
    const isSm = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <TransitionComp {...transition}>
            <CompDescTop title="Dúvidas Frequentes" subTitle="Alguma das dúvidas que as pessoas tem referente aos nossos serviços" />
            <Grid spacing={isSm ? 0 : 2} container sx={{ margin: 0, pr: isSm ? 0 : "30px" }}>
                {dataCompSecAbout.map((data, key) => (
                    <Grid key={key} pt={isSm ? 2 : 0} item xs={12} sm={6} lg={4} md={4} xl={4}>
                        <AccordionBoubt title={data.title} desc={data.desc} />
                    </Grid>
                ))}
            </Grid>
        </TransitionComp> 
    )
}