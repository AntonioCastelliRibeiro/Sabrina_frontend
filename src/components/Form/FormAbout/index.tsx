import React, { useEffect } from "react";
import { Container, Stack, useTheme } from "@mui/material";
import { CardActionAreaComp, CardMediaComp, Content } from "./styles";
import { data } from "./data";
import { transition } from "./motion";
import { TransitionComp, TypograpySubTitle } from "../FormPrincipal/CompDescTop/styles";
import CompDescTop from "../FormPrincipal/CompDescTop";
const imgQuemSomos = "https://sabrina-bucket.s3.sa-east-1.amazonaws.com/quemsomos.png";

const dataText = [
    {
        text: data.textFirst,
    }, 
    {
        text: data.textSec,
    }, 
    {
        text: data.textThird,
    }
]

export default function FormAbout() {
    const theme = useTheme();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Content bgcolor={theme.palette.primary.dark} >
            <Container maxWidth="lg">
                <Stack spacing={3} >

                    <TransitionComp {...transition}>
                        <CompDescTop title="Sobre nós" subTitle={data.subTitle} />
                        {/* <CardActionAreaComp>
                            <CardMediaComp image={data.imgCapa} />
                        </CardActionAreaComp> */}
                    </TransitionComp>

                    <TransitionComp {...transition}>
                        <Stack spacing={3}>
                            {dataText.map((data, key)=>(
                                <TypograpySubTitle 
                                sx={{ fontSize: { 
                                    xs: theme.typography.body1.fontSize, 
                                    sm: theme.typography.body1.fontSize, 
                                    md: theme.typography.h4.fontSize, 
                                    lg: theme.typography.h5.fontSize, 
                                    xl: theme.typography.h5.fontSize 
                                    } 
                                }}
                                theme={theme} 
                                color={theme.palette.secondary.light} 
                                textAlign="left" 
                                children={data.text} 
                            />
                            ))}
                        </Stack>                        
                    </TransitionComp>

                    <TransitionComp {...transition}>
                        <CardActionAreaComp>
                            <CardMediaComp theme={theme} image={imgQuemSomos} />
                        </CardActionAreaComp>
                    </TransitionComp>                    
                </Stack>
            </Container>
        </Content>
    )
}