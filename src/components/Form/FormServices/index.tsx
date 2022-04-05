import { Container, Grid, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import MyCardSocial from "../../MyCardSocial";
import { transition } from "../FormAbout/motion";
import { Content } from "../FormAbout/styles";
import CompDescTop from "../FormPrincipal/CompDescTop";
import { TransitionComp } from "../FormPrincipal/CompDescTop/styles";
import { dataFace, dataInsta, dataTikTok, dataTitle } from "./data";
import { TypographyTitle } from "./styles";

export default function FormServices(){
    const theme = useTheme();
    const isDownMd = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Content>
            <Container maxWidth="lg" >
                <TransitionComp {...transition}>
                    <CompDescTop title="Nossos Serviços" subTitle={"Trabalhamos com as seguintes plataformas e serviços:"} />
                    <Stack spacing={7}>
                        <Stack spacing={2}>
                        <TypographyTitle children={dataTitle.titleFirst} />
                        <Grid container spacing={isDownMd ? 0 : 2}  style={{ margin: 0, width: "100%" }}>
                            {dataInsta.map((data, key)=>(
                                <Grid style={{ margin: 0, paddingTop: isDownMd ? "16px" : "16px" }} item xs={12} sm={12} md={6} lg={4} xl={4} >
                                    <MyCardSocial data={data} />
                                </Grid>
                            ))}
                        </Grid>
                        </Stack>
                        <Stack spacing={2}>
                            <TypographyTitle children={dataTitle.titleSec} />
                            <Grid container spacing={isDownMd ? 0 : 2}  style={{ margin: 0, width: "100%" }}>
                                {dataFace.map((data, key)=>(
                                    <Grid style={{ margin: 0, paddingTop: isDownMd ? "16px" : "16px" }} item xs={12} sm={12} md={6} lg={4} xl={4} >
                                        <MyCardSocial data={data} />
                                    </Grid>
                                ))}
                            </Grid>
                        </Stack>
                        <Stack spacing={2}>
                            <TypographyTitle children={dataTitle.titleThird} />
                            <Grid container spacing={isDownMd ? 0 : 2}  style={{ margin: 0, width: "100%" }}>
                                {dataTikTok.map((data, key)=>(
                                    <Grid style={{ margin: 0, paddingTop: isDownMd ? "16px" : "16px" }} item xs={12} sm={12} md={6} lg={4} xl={4} >
                                        <MyCardSocial data={data} />
                                    </Grid>
                                ))}
                            </Grid>
                        </Stack>
                    </Stack>
                </TransitionComp>
            </Container>
        </Content>
    )
}