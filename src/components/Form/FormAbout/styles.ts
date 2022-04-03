import { CardActionArea, CardMedia, styled } from "@mui/material";

export const Content = styled('div')(({ theme })=>({
    paddingTop: '70px',
    paddingBottom: '70px',
    minHeight: '100vh',
    width: '100%',
    backgroundColor: theme.palette.primary.dark,
}));

export const CardActionAreaComp = styled(CardActionArea)`
    height: 100%;
    width: 100%;
    color: #fff;
    border-radius: 9px;
`;

export const CardMediaComp = styled(CardMedia)(({ theme })=>({
    height: "800px",
    width: "100%",
    borderRadius: "inherit",
    [theme.breakpoints.down('md')]: {
        height: "500px",
    },
    [theme.breakpoints.down('sm')]: {
        height: "300px",
    }
}));
   
export const IrFrameComp = styled('iframe')`
    height: 500px;
    width: 100%;
    border-radius: 9px;
    border: 0;
`;