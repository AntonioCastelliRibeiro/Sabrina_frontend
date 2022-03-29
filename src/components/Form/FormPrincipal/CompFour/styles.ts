import { CardActionArea, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import { ITheme } from "./interface";

export const ImgComp = styled('img')(()=>({
    height: "630px",
    maxWidth: "500px"
}));

export const ContentMotionIcon = styled(motion.div)(()=>({
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
}));

export const ContainerComp = styled(Container)(({ theme })=>({
    height: "100%",
    [theme.breakpoints.down('sm')]: {
        padding: "0px"
    }
}));

export const Content = styled(Stack)(()=>({
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
}));

export const TransitionComp = styled(motion.div)(({ })=>({
    height: "inherit",
    width: "inherit",
    display: "inherit",
    flexDirection: "inherit",
    alignItems: "inherit",
    justifyContent: "inherit",
    padding: "inherit",
    margin: "inherit",
}));

export const TypograpyTitle = styled(Typography)<ITheme>(({ theme, textAlign })=>({
    textAlign: textAlign || "center",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    color: theme.palette.secondary.light,
    fontSize: theme.typography.h5.fontSize,
    [theme.breakpoints.down('sm')]: {
        textAlign: "left",
        fontSize: theme.typography.h6.fontSize,
    }
}));

export const ContentImg = styled('div') (({})=>({
    height: "50px",
    width: "50px"    
}))
   
export const TypograpySubTitle = styled(Typography) <ITheme> (({ theme, textAlign })=>({
    textAlign: textAlign || "center",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    color: theme.palette.secondary.light,
    fontSize: theme.typography.body1.fontSize,
    [theme.breakpoints.down('sm')]: {
        padding: "0px 5px 0px 5px",
        fontSize: theme.typography.body1.fontSize,
    }
}))
   
export const StackContent = styled(Stack)(({ theme })=>({
    height: "100%",
    width: "auto",
    [theme.breakpoints.down('sm')]: {
        width: "100%"
    }
}))

export const CardActionAreaComp = styled(CardActionArea) <ITheme> (({ theme, selected })=>({
    padding: "10px",
    height: "100%",
    borderRadius: "9px",
    color: theme.palette.secondary.main,
    border: selected ? "2px solid #fff" : "2px solid transparent",
    transition: theme.transitions.easing.easeIn
}));

export const ContentIconMdUp = styled('div')(({})=>({
    height: "300px",
    width: "100%"
}));

export const ContentIconMdDown = styled('div')(({})=>({
    height: "100%",
    width: "100%"
}));