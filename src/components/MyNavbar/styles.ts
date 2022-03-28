import { AppBar, IconButton, Stack, Theme, Typography } from "@mui/material";
// import { styled as styledSis } from '@mui/system';

import styled from "styled-components";

interface ITheme {
    theme: Theme;
}

export const StackComp = styled(Stack) <ITheme>`
    flex-grow: 1;
    ${props => props.theme.breakpoints.down('md')} {
        display: none;
    }
`;

export const TypograpyComp = styled(Typography) <ITheme>`
    ${props => props.theme.breakpoints.down('md')} {
        flex-grow: 1;
    }
`;

export const IconButtonMenu = styled(IconButton) <ITheme>`
    display: none;
    ${props => props.theme.breakpoints.down('md')} {
        display: block;
    }
`;

export const AppBarComp = styled(AppBar) <ITheme>`
    background-color: ${props => props.theme.palette.primary.dark};
`;

// export const AppBarComp = styledSis(AppBar)(({ theme }) => ({
//     backgroundColor: theme.palette.primary.dark,
//   }));
  