import { Button, Stack, Typography } from "@mui/material";
import styled from "styled-components";
import { ITheme } from "./interface";

export const Content = styled(Stack)`
    height: 250px;
    justify-content: center;
    align-items: center;
`;

export const TypograpyComp = styled(Typography)<ITheme>`   
    font-size: ${props => props.theme.typography.h3};
    ${props => props.theme.breakpoints.up('xs')} {
        font-size: ${props => props.theme.typography.h5};
    };
    ${props => props.theme.breakpoints.up('md')} {
        font-size: ${props => props.theme.typography.h4};
    };
    ${props => props.theme.breakpoints.up('lg')} {
        font-size: ${props => props.theme.typography.h3};
    }
`;