import { Container, Grid, useMediaQuery, useTheme } from "@mui/material";
import MyCardCountInfo from "../../../MyCardCountInfo";
import CompDescTop from "../CompDescTop";
import { dataCardCountInfo } from "./data";

export default function CompThird(){    
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <Container maxWidth="lg" sx={{pt: 10}}>  
            <CompDescTop title="Nossos números ultrapassam os limites" subTitle="Agradeçemos à todos os clientes pela confiança" />          
            <Grid spacing={isMd ? 0 : 2} container sx={{ margin: 0 }}>
                {dataCardCountInfo.map((data, key) => (
                    <Grid key={key} pt={isMd ? 2 : 0} item xs={12} sm={12} lg={4} md={4} xl={4}>
                        <MyCardCountInfo {...data} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}