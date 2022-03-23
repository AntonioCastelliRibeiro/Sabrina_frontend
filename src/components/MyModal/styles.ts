import { CircularProgress, IconButton } from "@mui/material";
import styled from "styled-components";

export const ImgComp = styled.img`
    max-width: 100%; 
    height: auto;
`;

export const IconButtonComp = styled(IconButton)`
    position: absolute;
    color: #fff;
    top: 5px;
    right: 5px;
`;

export const IconButtonComp2 = styled(IconButton)`
    position: absolute;
    color: #fff;
    top: 5px;
    right: 60px;
`;

export const ContainerImg = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CircularProgressComp = styled(CircularProgress)`
    color: #fff;
    position: absolute;
    z-index: 10000;
    left: 48%;
    top: 48%;
`;

