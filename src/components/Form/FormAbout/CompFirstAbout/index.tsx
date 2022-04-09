import React from "react";
import { Stack, useTheme } from "@mui/material";
import { CardActionAreaComp, CardMediaComp } from "./styles";
import { data, dataText } from "./data";
import { transition } from "../motion";
import { TransitionComp, TypograpySubTitle } from "../../FormPrincipal/CompDescTop/styles";
import CompDescTop from "../../FormPrincipal/CompDescTop";

export default function CompFirstAbout() {
    const theme = useTheme();

    return (
        <Stack spacing={3} >
            <TransitionComp {...transition}>
                <CompDescTop title="Sobre nós" subTitle={data.subTitle} />
            </TransitionComp>

            <TransitionComp {...transition}>
                <Stack spacing={3}>
                    {dataText.map((data, key)=>(
                        <TypograpySubTitle 
                            sx={{ fontSize: { 
                                xs: theme.typography.body1.fontSize, 
                                sm: theme.typography.body1.fontSize, 
                                md: theme.typography.h6.fontSize, 
                                lg: theme.typography.h6.fontSize, 
                                xl: theme.typography.h6.fontSize 
                                } 
                            }}
                            key={key}
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
                    <CardMediaComp theme={theme} image={data.imgQuemSomos} />
                </CardActionAreaComp>
            </TransitionComp>                  
        </Stack>
    )
}