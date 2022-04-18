import { Stack, styled, Typography } from "@mui/material";

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
