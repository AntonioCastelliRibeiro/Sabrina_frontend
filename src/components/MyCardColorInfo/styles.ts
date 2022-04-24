import { Stack, styled, Typography } from "@mui/material";

interface IContent {
    img: string;
}

export const Content = styled(Stack)<IContent>(({ theme, img }) => ({
  height: 500,
  width: "100%",
  color: "#fff",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 9,
  textAlign: "center",
  boxShadow: theme.shadows[2],
  border: "2px solid transparent",
  backgroundColor: theme.palette.primary.main,
  backgroundImage: `url(${img})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  "&:hover": {
      boxShadow: theme.shadows[5],
      border: `2px solid ${theme.palette.primary.light}`,
  },
  transition: theme.transitions.easing.easeIn
}));

export const TypograpyTitle = styled(Typography)(({ theme }) => ({
    fontWeight: "bold",
    [theme.breakpoints.up('xs')]: {
        fontSize: theme.typography.h4.fontSize
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: theme.typography.h4.fontSize
    },
    [theme.breakpoints.up('md')]: {
        fontSize: theme.typography.h3.fontSize
    }
}));
  
export const TypograpyDesc = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.up('xs')]: {
        fontSize: theme.typography.body2.fontSize
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: theme.typography.body2.fontSize
    },
    [theme.breakpoints.up('md')]: {
        fontSize: theme.typography.body1.fontSize
    }
}));
