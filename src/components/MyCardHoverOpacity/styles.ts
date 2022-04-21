import { CardMedia, Stack, styled } from "@mui/material";

export const ContentDesc = styled(Stack)(({ theme }) => ({
    height: "100%",
    width: "100%",
    justifyContent: "center",
    color: "#fff",
    top: "0px",
    position: "absolute"
  }));
  
export const CardComp = styled("div")(({ theme }) => ({
    height: "400px",
    width: "100%",
    filter: "grayscale(100%)",
    zIndex: 100,   
    overflow: "hidden", 
    "&:hover": {
      filter: "grayscale(0%)"
    },
    [theme.breakpoints.down('lg')]: {
      filter: "grayscale(0%)",
    },
    transition: "ease 0.1s",
  }));
  
export const CardMediaComp = styled(CardMedia)(({ theme }) => ({
    height: 400,
    width: "100%",
    filter: "inherit",
    borderRadius: 9
  }));