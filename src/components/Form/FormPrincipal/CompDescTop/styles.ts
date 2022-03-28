import { Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import { ITheme } from "./interface";

export const ContainerComp = styled(Container)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
        padding: "0px",
    },
}));

export const Content = styled(Stack)(() => ({
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
}));

export const TransitionComp = styled(motion.div)(() => ({
    height: "inherit",
    width: "inherit",
    display: "inherit",
    flexDirection: "inherit",
    alignItems: "inherit",
    justifyContent: "inherit",
    padding: "inherit",
    margin: "inherit",
}));

export const TypograpyTitle = styled(Typography)<ITheme>(({ theme, textAlign }) => ({
    textAlign: textAlign || "center",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    color: theme.palette.secondary.light,
    [theme.breakpoints.down('sm')]: {
        textAlign: "center"
    }
}));

export const TypograpySubTitle = styled(Typography)<ITheme>(({ theme, textAlign }) => ({
    textAlign: textAlign || "center",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    color: theme.palette.secondary.light,
    [theme.breakpoints.down('sm')]: {
        padding: "0px 5px 0px 5px",
    }
}));

export const StackContent = styled(Stack)<ITheme>(({ theme }) => ({
    height: "100%",
    width: "auto",
    [theme.breakpoints.down('sm')]: {
        width: "100%",
    }
}));


