import { CardActionArea, CardMedia } from "@mui/material";
import styled from "styled-components";
import { IContent } from "./interface";

export const Content = styled.div<IContent>`
    padding-top: 70px;
    padding-bottom: 70px;
    min-height: 100vh;
    width: 100%;
    background-color: ${props => props.bgcolor};
`;

export const CardActionAreaComp = styled(CardActionArea)`
    height: 100%;
    width: 100%;
    color: #fff;
    border-radius: 9px;
`;

export const CardMediaComp = styled(CardMedia)`
    height: 500px;
    width: 100%;
    border-radius: inherit;
`;

export const IrFrameComp = styled.iframe`
    height: 500px;
    width: 100%;
    border-radius: 9px;
    border: 0;
`;