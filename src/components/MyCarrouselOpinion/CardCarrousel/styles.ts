import { styled, Typography } from "@mui/material";

export const TypographyTitle = styled(Typography)(({theme})=>({
    fontStyle: "italic",
    fontWeight: "300",
    color: theme.palette.secondary.light,
    width: "70%", 
    // padding: "30px 0px 30px 0px",
    textAlign: "center",
}));

export const TypographyName = styled(Typography)(({theme})=>({
    width: "auto",
    textAlign: "center",
    fontWeight: 700,
    color: theme.palette.secondary.main
}));

export const TypographyCharge = styled(Typography)(({theme})=>({
    textTransform: "uppercase",
    fontWeight: "500",
    color: theme.palette.secondary.light,
}));