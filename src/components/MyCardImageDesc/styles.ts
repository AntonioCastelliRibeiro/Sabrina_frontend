import {
    CardActionArea,
    CardMedia,
    Stack,
    styled,
    Typography
  } from "@mui/material";
  
  export const Content = styled(Stack)(({ theme }) => ({
    justifyContent: "center",
    [theme.breakpoints.up("xs")]: {
      justifyContent: "center"
    },
    [theme.breakpoints.up("sm")]: {
      justifyContent: "center"
    },
    [theme.breakpoints.up("md")]: {
      justifyContent: "center"
    }
  }));
  
  export const ContentImage = styled(Stack)(({ theme }) => ({
    width: "50%",
  }));
  
  export const CardActionAreaComp = styled(CardActionArea)(({ theme }) => ({
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    borderBottomRightRadius: 9,
    borderBottomLeftRadius: 80,
    color: "#fff",
    [theme.breakpoints.up("xs")]: {
      height: "50vw",
      maxWidth: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      height: "35vh",
      maxWidth: "100%",
    },
    [theme.breakpoints.up("md")]: {
      height: 350,
      maxWidth: 350,
    },
    transition: theme.transitions.easing.easeIn
  }));
  
  export const CardMediaComp = styled(CardMedia)(({ theme }) => ({
    height: "inherit",
    maxWidth: "inherit",
    borderTopLeftRadius: "inherit",
    borderTopRightRadius: "inherit",
    borderBottomRightRadius: "inherit",
    borderBottomLeftRadius: "inherit"
  }));
  
  export const ContentDesc = styled(Stack)(({ theme }) => ({
    width: "100%",
    justifyContent: "space-evenly"
  }));
  
  export const TypographyDescTop = styled(Typography)(({ theme }) => ({
    textTransform: "uppercase",
    fontWeight: 800,
    color: theme.palette.secondary.dark,
    [theme.breakpoints.up("xs")]: {
      fontSize: theme.typography.body2.fontSize
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.body2.fontSize
    },
    [theme.breakpoints.up("md")]: {
      fontSize: theme.typography.body2.fontSize
    }
  }));
  
  export const TypographyTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.secondary.main,
    fontWeight: "bold",
    [theme.breakpoints.up("xs")]: {
      fontSize: theme.typography.h5.fontSize
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.h4.fontSize
    },
    [theme.breakpoints.up("md")]: {
      fontSize: theme.typography.h4.fontSize
    }
  }));
  
  export const TypographyDesc = styled(Typography)(({ theme }) => ({
    color: theme.palette.secondary.main,
    fontWeight: 500,
    transition: "ease .3s",
    [theme.breakpoints.up("xs")]: {
      opacity: 0,
      fontSize: "0px",      
    },
    [theme.breakpoints.up("sm")]: {
      opacity: 0,
      fontSize: "0px"
    },
    [theme.breakpoints.up("md")]: {
      fontSize: theme.typography.h6.fontSize,
      opacity: 1
    }
  }));
  
  export const TypographyDescMd = styled(Typography)(({ theme }) => ({
    color: theme.palette.secondary.main,
    fontWeight: 500,
    transition: "ease .3s",
    [theme.breakpoints.up("xs")]: {
      fontSize: theme.typography.body1.fontSize,
      opacity: 1
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "0px",
      opacity: 0
    }
  }));
  