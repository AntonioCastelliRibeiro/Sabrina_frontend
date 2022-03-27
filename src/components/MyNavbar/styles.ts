import { AppBar, IconButton, Stack, Theme, Typography } from "@mui/material";
import styled from "styled-components";

interface IMedia {
    small: string;
}

export const StackComp = styled(Stack) <IMedia>`
    flex-grow: 1;
    ${props => props.small} {
        display: none;
    }
`;

export const TypograpyComp = styled(Typography) <IMedia>`
    ${props => props.small} {
        flex-grow: 1;
    }
`;

export const IconButtonMenu = styled(IconButton) <IMedia>`
    display: none;
    ${props => props.small} {
        display: block;
    }
`;

interface ITheme {
    theme: Theme;
}

export const AppBarComp = styled(AppBar) <ITheme>`
    background-color: ${props => props.theme.palette.primary.dark};
`;