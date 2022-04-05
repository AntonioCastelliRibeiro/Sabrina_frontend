import { CardActionArea, styled, Typography } from "@mui/material";

export const CountComp = styled(Typography)(({ theme }) => ({
    fontColor: "black",
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.h4.fontSize
    }
}));
  
export const TitleComp = styled(Typography)(({ theme }) => ({
    fontColor: "black",
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.h5.fontSize
    }
}));

export const CardActionAreaComp = styled(CardActionArea)(({ theme }) => ({
    height: '130px',
    borderRadius: '9px',
    border: `2px solid transparent`,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    boxShadow: theme.shadows[2],
    "&:hover": {
        border: `2px solid ${theme.palette.primary.light}`,
        boxShadow: theme.shadows[5],
    },
    transition: theme.transitions.easing.easeIn
}));