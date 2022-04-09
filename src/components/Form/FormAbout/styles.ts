import { styled } from "@mui/material";
   
export const Content = styled('div')(({ theme })=>({
    paddingTop: '70px',
    paddingBottom: '70px',
    minHeight: '100vh',
    width: '100%',
    backgroundColor: theme.palette.primary.dark,
}));

export const IrFrameComp = styled('iframe')`
    height: 500px;
    width: 100%;
    border-radius: 9px;
    border: 0;
`;