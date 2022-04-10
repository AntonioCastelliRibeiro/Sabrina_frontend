import { Accordion, CardActionArea, Divider, styled, Typography } from "@mui/material";
import { ICardActionAreaComp } from "./interface";

export const DividerComp = styled(Divider)(({ theme }) => ({
    backgroundColor: theme.palette.primary.light,
}));

export const CardActionAreaComp = styled(CardActionArea)<ICardActionAreaComp>(({ theme, expanded }) => ({
    height: "inherit",
    borderTopLeftRadius: "4px",
    borderTopRightRadius: "4px",
    borderBottomLeftRadius: expanded ? "0px" : "4px",
    borderBottomRightRadius: expanded ? "0px" : "4px",
    color: theme.palette.secondary.light,
}));

export const AccordionComp = styled(Accordion)(({ theme, expanded }) => ({
    boxShadow: expanded ? theme.shadows[5] : theme.shadows[2],
    backgroundColor: theme.palette.primary.main,
    border: `2px solid ${expanded ? theme.palette.primary.light : "transparent"}`,
    "&:hover": { 
        boxShadow: theme.shadows[5],
        border: `2px solid ${theme.palette.primary.light}`,
    },
    transition: theme.transitions.easing.easeIn,    
}));

export const TypographyTitle = styled(Typography)(({ theme }) => ({
    width: "100%",
    flexShrink: 0,
    fontWeight: "bold",
    color: theme.palette.secondary.light
}));

export const TypographySubTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.secondary.dark
}));

export const TypographyDesc = styled(Typography)(({ theme }) => ({
    color: theme.palette.secondary.light
}));
