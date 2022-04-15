import { Box, Container } from "@mui/material";
import styled from "styled-components";
import { IContentPuller, ITheme } from "./interface";

export const Root = styled('div')(({ theme }) => ({
    height: '100%',
  }));
  
export const Puller = styled(Box)(({ theme }) => ({
    width: 30,
    height: 6,
    backgroundColor: "#fff",
    borderRadius: 3,
    position: 'absolute',
    top: 10,
    left: 'calc(50% - 15px)',
  }));

export const ContentPuller = styled.div<IContentPuller>`
    background-color: ${props => props.theme.palette.primary.dark};
    height: 100%;
    display: ${props => props.openModal ? "block" : "none"};
    position: absolute;
    top: ${props => props.openModal ? "-20px" : "0px"};
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    visibility: visible;
    right: 0px;
    left: 0px;
`;

export const ContentButton = styled.div<ITheme>`
    height: 100%;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.palette.primary.dark};

`;

export const ContainerComp = styled(Container) <ITheme>`
    height: 100%;
    background-color: ${props => props.theme.palette.primary.dark};
`;