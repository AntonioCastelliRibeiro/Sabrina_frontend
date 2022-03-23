import React, { Suspense, useEffect } from "react";
import { useTheme } from "@mui/material";
import CompDescTop from "./CompDescTop";
import { Container } from "./styles";
import { Content } from "../FormAbout/styles";
import { IMAGES } from "./data";
import SuspenseComp from "../FormPrincipal/SuspenseComp";

const MyImageMasonry = React.lazy(() => import("../../MyImageMasonry"));

export default function FormAvaliable(){
    const theme = useTheme();

    useEffect(()=>{
        window.scrollTo(0,0);
    }, []);
        
    return (
        <Content bgcolor={theme.palette.primary.dark} >
            <Container>
                <CompDescTop />
                <Suspense fallback={<SuspenseComp />}>
                    <MyImageMasonry issuspense={false} data={IMAGES} pathname="/disponiveis/img/" />
                </Suspense>
            </Container>
        </Content>
    )
}