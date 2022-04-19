import { Stack, styled, Typography, keyframes } from "@mui/material";

export const TypographyTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.light,
  fontWeight: "bold",
  [theme.breakpoints.up("xs")]: {
    fontSize: theme.typography.h4.fontSize
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: theme.typography.h4.fontSize
  },
  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.h4.fontSize
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: theme.typography.h2.fontSize
  }
}));

export const TypographyDesc = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.light,
  [theme.breakpoints.up("sm")]: {
    fontSize: theme.typography.h6.fontSize
  },
  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.h6.fontSize
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: theme.typography.h6.fontSize
  }
}));

export const TypographySubDesc = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.light,
  [theme.breakpoints.up("sm")]: {
    fontSize: theme.typography.h6.fontSize
  },
  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.h6.fontSize
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: theme.typography.h6.fontSize
  }
}));

export const ContentImage = styled(Stack)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  [theme.breakpoints.up("xs")]: {
    alignItems: "center"
  }
}));

export const ImageComp = styled("img")(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    maxHeight: "350px",
    maxWidth: "350px"
  },
  [theme.breakpoints.up("sm")]: {
    maxHeight: "550px",
    maxWidth: "550px"
  },
  [theme.breakpoints.up("md")]: {
    maxHeight: "400px",
    maxWidth: "400px"
  },
  [theme.breakpoints.up("lg")]: {
    maxHeight: "550px",
    maxWidth: "550px"
  }
}));

const scaleKeyFrame = keyframes`
  0%   {transform: scale(1)}
  25%  {transform: scale(1.1)}
  50%  {transform: scale(1.1)}
  75%  {transform: scale(1.1)}
  100% {transform: scale(1)}
`;

export const ImgFrame = styled("img")(({ theme }) => ({
  height: "80px",
  width: "80px",
  position: "absolute",
  animation: `${scaleKeyFrame} 2.0s ease-in-out`,
  // transform: "translate(-260px, 0)",
  animationIterationCount: "infinite",
  zIndex: "2"
}));

