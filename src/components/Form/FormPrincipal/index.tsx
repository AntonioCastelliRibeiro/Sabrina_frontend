import React, { Suspense, useEffect } from "react";


// import { Container } from "./styles"
import CompDescTop from "./CompDescTop";
import { Container, useTheme, Stack } from "@mui/material";
import { Content } from "../FormAbout/styles";

import { dataDesc, IMAGES } from "./data";
import SuspenseComp from "./SuspenseComp";
import CompHoverSec from "./CompHoverSec";
import CompThird from "./CompThird";
import CompFour from "./CompFour";

const MyImageMasonry = React.lazy(() => import("../../MyImageMasonry"));


export default function FormPrincipal() {
    const theme = useTheme();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Content bgcolor={theme.palette.primary.dark}>
            <Container maxWidth="xl">
                <Stack alignItems="center" spacing={2}>
                    <CompFour />
                    {/* <CompDescTop title={dataDesc.title} subTitle={dataDesc.subTitle} />
                    <CompHoverSec />
                    <CompThird /> */}
                </Stack>
            </Container>
        </Content>
    )
}