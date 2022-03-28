import { AppBar, IconButton, Stack, Typography } from "@mui/material";
import { styled } from '@mui/system';

export const StackComp = styled(Stack)(({ theme }) => ({
    flexGrow: 1,
    [theme.breakpoints.down("md")]: {
        display: "none",
    },
}));

export const TypograpyComp = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
        flexGrow: 1,
    }
}));

export const IconButtonMenu = styled(IconButton)(({ theme }) => ({
    display: "none",
    [theme.breakpoints.down("md")]: {
        display: "block",
    }
}));

export const AppBarComp = styled(AppBar)(({ theme }) => ({
    backgroundColor: theme.palette.primary.dark,
}));
  