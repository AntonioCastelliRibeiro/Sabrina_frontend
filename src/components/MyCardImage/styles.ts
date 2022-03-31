import { CardActionArea, Stack, styled, Typography } from "@mui/material";

export const CardActionAreaComp = styled(CardActionArea)(({ theme }) => ({
  borderRadius: "9px",
  color: "#fff"
}));

export const StackContent = styled(Stack)(({ theme })=>({
    boxShadow: theme.shadows[5],
    overflow: "hidden",
    borderRadius: "inherit",
    backgroundColor: theme.palette.primary.main,
    "&:hover": { 
        boxShadow: theme.shadows[10] 
    },
    transition: theme.transitions.easing.easeIn
}));

export const TypographyTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  color: theme.palette.secondary.light,
  [theme.breakpoints.up("xs")]: {
    fontSize: theme.typography.h5.fontSize,
    textAlign: "center"
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: theme.typography.h4.fontSize,
    textAlign: "left"
  },
  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.h3.fontSize
  }
}));

export const TypographySubTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  color: "#270644",
  [theme.breakpoints.up("xs")]: {
    fontSize: theme.typography.h5.fontSize,
    textAlign: "center",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: theme.typography.h4.fontSize,
    textAlign: "left"
  },
  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.h3.fontSize
  }
}));

export const TypographyDesc = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  [theme.breakpoints.up("xs")]: {
    fontSize: theme.typography.body1.fontSize,
    textAlign: "center"
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: theme.typography.h5.fontSize,
    textAlign: "left"
  },
  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.h5.fontSize
  }
}));
