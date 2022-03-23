import { CardActionArea, Skeleton } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 829px;
`;

export const ImgComp = styled.img`
    border-radius: 9px;
    height: 100%;
    width: 100%;
    cursor: pointer;
`;

interface IBgColor {
    bgcolor: string;
}

export const SkeletonComp = styled(Skeleton)<IBgColor>`
    border-radius: 9px;
    height: 495px;
    width: inherit;
    cursor: pointer;
    background-color: ${props => props.bgcolor};
`;

export const CardActionAreaComp = styled(CardActionArea)`
    color: #fff;
    height: 100%;
    width: 100%;
`;

export const List = styled.div``;
