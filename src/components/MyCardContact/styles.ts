import { Card, styled, Typography } from "@mui/material";

export const TypographyBg = styled(Typography)(({ theme }) => ({
  zIndex: 0,
  opacity: '90%',
  position: "absolute",
  marginLeft: -10,
  color: theme.palette.primary.dark,
  fontWeight: "bold",
  fontSize: 150,
  textShadow: "4px 6px 8px #0f031a",
  [theme.breakpoints.up("md")]: {
    marginLeft: -10
  }
}));

export const TypographyTitle = styled(Typography)(({ theme }) => ({
  zIndex: 1,
  color: "#fff",
  fontWeight: "bold",
  fontSize: theme.typography.h5.fontSize,
  textShadow: "4px 6px 8px black",
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.h5.fontSize
  }
}));

export const TypographySubTitle = styled(Typography)(({ theme }) => ({
  zIndex: 1,
  color: "#fff",
  fontSize: theme.typography.body1.fontSize,
  textShadow: "4px 6px 8px black",
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.body1.fontSize
  }
}));

export const CardComp = styled(Card)(({ theme }) => ({
    minHeight: "160px", 
    height: "100%", 
    borderRadius: "9px",
    backgroundColor: theme.palette.primary.main, 
    [theme.breakpoints.down("sm")]: {
    }
  }));