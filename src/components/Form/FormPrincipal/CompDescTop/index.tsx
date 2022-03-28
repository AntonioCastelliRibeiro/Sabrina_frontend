import React from "react";
import { Stack, useTheme } from "@mui/material";
import { ContainerComp, Content, TransitionComp, TypograpySubTitle, TypograpyTitle } from "./styles";
import { transition } from "../../FormAbout/motion";
import { IData } from "./interface";

export default function CompDescTop(props: IData) {
    const theme = useTheme();

    return (
        <ContainerComp theme={theme} maxWidth="lg" >
            <TransitionComp {...transition} >
                <Content spacing={2}>
                    <Stack alignItems="center" pb={4} pt={2} spacing={2} >
                        <TypograpyTitle 
                            sx={{ fontSize: { 
                                    xs: theme.typography.h4.fontSize, 
                                    sm: theme.typography.h4.fontSize, 
                                    md: theme.typography.h3.fontSize, 
                                    lg: theme.typography.h3.fontSize, 
                                    xl: theme.typography.h3.fontSize 
                                    } 
                                }}
                            theme={theme} 
                            children={props.title} 
                        />
                        <ContainerComp theme={theme} maxWidth="sm" >
                            <TypograpySubTitle 
                                sx={{ fontSize: { 
                                    xs: theme.typography.h6.fontSize, 
                                    sm: theme.typography.h6.fontSize, 
                                    md: theme.typography.h6.fontSize, 
                                    lg: theme.typography.h6.fontSize, 
                                    xl: theme.typography.h6.fontSize 
                                    } 
                                }} 
                                theme={theme} 
                                children={props.subTitle} 
                            />
                        </ContainerComp>
                    </Stack>
                </Content>
            </TransitionComp>
        </ContainerComp>
    )
}