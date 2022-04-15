import { Avatar, Box, Stack, styled, Typography } from "@mui/material";

export const TypographyTitle = styled(Typography)(({theme})=>({
    fontWeight: 0,
    color: theme.palette.secondary.light,
    padding: 0,
    textAlign: "center",
    fontSize: theme.typography.h6.fontSize,
    [theme.breakpoints.down('sm')]: {
        fontSize: theme.typography.body1.fontSize
    }
}));

export const TypographyName = styled(Typography)(({theme})=>({
    color: theme.palette.secondary.main,
    fontSize: theme.typography.h6.fontSize,
    [theme.breakpoints.down('sm')]: {
        fontSize: theme.typography.body1.fontSize
    }
}));

export const TypographyCharge = styled(Typography)(({theme})=>({
    // textTransform: "uppercase",
    color: theme.palette.secondary.light,
    fontSize: theme.typography.body2.fontSize,
    [theme.breakpoints.down('sm')]: {
        fontSize: theme.typography.body2.fontSize
    }
}));

export const Content = styled(Box)(({theme})=>({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    userSelect: "none",
    alignItems: "center",    
    overflow: "hidden",
    width: "100%",
    background: "inherit",
    minHeight: "300px",
    [theme.breakpoints.down('sm')]: {
        minHeight: "100%",
    }
}));

export const ContentSec = styled(Stack)(({theme})=>({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxHeight: 'inherit',
    userSelect: "none",
    paddingRight: 30,
    paddingLeft: 30
}));

export const AvatarComp = styled(Avatar)(({theme})=>({
    height: 70,
    width: 70
}));