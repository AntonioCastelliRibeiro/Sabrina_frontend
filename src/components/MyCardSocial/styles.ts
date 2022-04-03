import { CardActionArea, Stack, styled, Typography } from "@mui/material";

export const CardActionAreaComp = styled(CardActionArea)(({ theme }) => ({
  borderRadius: "9px",
  color: theme.palette.secondary.light,
  backgroundColor: theme.palette.primary.main,
  overflow: "hidden",
  height: "100%",
  "&:hover": {
    boxShadow: 10
  },
  boxShadow: theme.shadows[5],
  transition: "0.3s ease"
}));

export const TypographyTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.light,
  fontWeight: "bold",
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
    fontSize: theme.typography.h6.fontSize
  }
}));

export const TypographySubTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.dark,
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
    fontSize: theme.typography.body1.fontSize
  }
}));

export const StackAvatar = styled(Stack)(({ theme }) => ({
  height: "100%",
  width: "100px",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    width: "100%"
  }
}));
