import { Button, Card, CardActionArea, Stack, styled, Typography } from "@mui/material";

export const CardActionAreaComp = styled(CardActionArea)(({ theme }) => ({
  borderRadius: "9px",
  color: "#fff"
}));

export const ButtonComp = styled(Button)(({ theme }) => ({
  boxShadow: theme.shadows[2],
  '&:hover': { 
    boxShadow: theme.shadows[5]
  },
  transition: theme.transitions.easing.easeIn
}));

export const CardComp = styled(Card)(({ theme }) => ({
  backgroundColor: 'transparent', 
  height: "600px",
  width: "100%", 
  borderRadius: 'inherit',
  boxShadow: theme.shadows[2],
  '&:hover': { 
    boxShadow: theme.shadows[5]
  },
  transition: theme.transitions.easing.easeIn,
}));

export const StackContent = styled(Stack)(({ theme })=>({
    overflow: "hidden",
    borderRadius: "inherit",
    backgroundColor: theme.palette.primary.dark,
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
  color: theme.palette.secondary.dark,
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
