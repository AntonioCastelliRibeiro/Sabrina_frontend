import { styled, Typography } from "@mui/material";

export const TypographyTitle = styled(Typography)(({theme})=>({
    color: theme.palette.secondary.main,
    textAlign: "center",
    fontSize: theme.typography.h3.fontSize,
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
        fontSize: theme.typography.h4.fontSize,
    }
}));