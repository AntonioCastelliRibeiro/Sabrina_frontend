import {
  Card,
  CardActionArea,
  CardMedia,
  Stack,
  styled as styledM,
  Typography
} from "@mui/material";
import styled from "styled-components";
import { ITypography } from "./interface";

export const CardComp = styledM(Card)(({ theme }) => ({
  height: "100%",
  maxWidth: "100%",
  backgroundColor: "transparent",
  transition: theme.transitions.easing.easeIn,
  "&:hover": {
    boxShadow: theme.shadows[10]
  }
}));

export const ContentDescPrinc = styled(Stack)(({ theme }) => ({
  height: "100%",
  justifyContent: "flex-end",
  transition: "0.3s ease",
}));

export const CardMediaComp = styled(CardMedia)(({ theme }) => ({
  height: "400px",
  maxWidth: "100%",
  "&:hover": {
    // height: "410px"
  },

}));

export const ContentTitle = styled(Stack)(({ theme }) => ({
  opacity: 1,
  bottom: 100,
  transition: "0.3s ease",
  // borderRadius: 9,    
  // width: "200px",
  // backgroundColor: "rgb(0 0 0 / 58%)"
}));

export const ContentDesc = styled(Stack)`
    opacity: 0;
    transition: ease 0.3s;
  `;

export const ContentBtn = styled.div`
    opacity: 0;
    transform: translateX(-30px);
    transition: ease 0.3s;
  `;

export const TypographyDesc = styled(Typography)(({ theme }) => ({
  transition: "ease 0.1s",
  opacity: 0
  // fontSize: theme.typography.body1.fontSize
}));

export const CardActionAreaComp = styledM(CardActionArea)(({ theme }) => ({
  color: "#fff",
  [theme.breakpoints.down("md")]: {
    [ContentTitle]: {
      transform: "translateY(0px)"
    },
    [ContentDesc]: {
      opacity: 1
    },
    [ContentBtn]: {
      opacity: "1",
      transform: "translateX(0px)"
    },
    [TypographyDesc]: {
      opacity: 1
    }
  },
  [theme.breakpoints.up("md")]: {
    [ContentTitle]: {
      transform: "translateY(60px)"
    },
    [TypographyDesc]: {
      opacity: 0,
      fontSize: "0px"
    }
  },

  "&:hover": {    
    [ContentTitle]: {
      transform: "translateY(0px)"
    },
    [ContentDesc]: {
      opacity: 1
    },
    [ContentBtn]: {
      opacity: 1,
      transform: "translateX(0px)"
    },
    [theme.breakpoints.up("md")]: {
      [TypographyDesc]: {
        opacity: 1,
        fontSize: theme.typography.body1.fontSize
      }
    }
  }
}));

export const ButtonComp = styledM(Stack)(({ theme }) => ({
  width: "180px",
  paddingTop: 10,
  paddingBottom: 10,
  paddingLeft: 17,
  paddingRight: 0,
  borderTopRightRadius: 9,
  borderTopLeftRadius: 0,
  borderBottomRightRadius: 0,
  backgroundColor: "#6a1b9ab8",
  
}));

export const TypographyTitle = styledM(Typography)<ITypography>(({ theme, width }) => ({
  backgroundColor: "#6a1b9ab8",
  borderRadius: "9px",
  padding: 5,
  width: width
}));
