import { CardActionArea, Container, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import styled from "styled-components";
import { ITheme } from "./interface";

export const ContainerComp = styled(Container)`
    height: 100%;
    ${props => props.theme.breakpoints.down('sm')} {
        padding: 0px;
    }
`;

export const Content = styled(Stack)`
    height: 100%;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const TransitionComp = styled(motion.div)`
    height: inherit;
    width: inherit;
    display: inherit;
    flex-direction: inherit;
    align-items: inherit;
    justify-content: inherit;
    padding: inherit;
    margin: inherit;
`;

export const TypograpyTitle = styled(Typography) <ITheme>`
    text-align: ${props => props.textAlign || "center"};
    height: 100%;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.palette.secondary.light};
    font-size: ${props => props.theme.typography.h5};    
    ${props => props.theme.breakpoints.down('sm')} {
        text-align: left;
        font-size: ${props => props.theme.typography.h6};
    }
`;

export const ContentImg = styled.div`
    height: 50px;
    width: 50px;
`;

export const TypograpySubTitle = styled(Typography) <ITheme>`
    text-align: ${props => props.textAlign || "center"};
    height: 100%;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.palette.secondary.light};
    font-size: ${props => props.theme.typography.body1};
    ${props => props.theme.breakpoints.down('sm')} {
        padding: 0px 5px 0px 5px;
        font-size: ${props => props.theme.typography.body1};
    }
`;

export const StackContent = styled(Stack) <ITheme>`
    height: 100%;
    width: auto;
    ${props => props.theme.breakpoints.down('sm')} {
        width: 100%;
    }
`;

export const TypograpyButton = styled(Typography) <ITheme>`
    font-size: ${props => props.theme.typography.body1};
    ${props => props.theme.breakpoints.down('sm')} {
        font-size: ${props => props.theme.typography.body2};
    }
`;

export const CardActionAreaComp = styled(CardActionArea) <ITheme>(({ theme })=>({
    padding: "10px",
    height: "100%",
    borderRadius: "9px",
    color: theme.palette.secondary.main,
    // backgroundColor: theme.palette.primary.main
})) 
    
