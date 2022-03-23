import { Box, Stack } from "@mui/material";
import styled from "styled-components";
import { IBaseFlex, IContent } from "./interface";

export const Content = styled.div<IContent>`
    position: absolute;
    background-color: ${props => props.backgroundColor};
    width: 100%;
    padding-left: 1.5vw;
    padding-right: 1.5vw;
`;

export const ContentLeft = styled(Box)``;

export const ContentFlexLeft = styled.div<IBaseFlex>`
    display: flex;
    flex-wrap: wrap;
    ${props => props.bkpmd} {
        flex-direction: column;
    }
`;

export const ContentFlexLeftSec = styled.div<IBaseFlex>`
    flex-grow: 2;
    ${props => props.bkpmd} {
    display: flex;
    flex-direction: column;
    align-items: center;
}
`;

export const ContentBtn = styled(Stack)<IBaseFlex>`
    padding-top: 10px;
    display: flex;
    flex-wrap: wrap;
`;

export const ContentIcon = styled(Box)<IBaseFlex>`
    display: flex;
    justify-content: flex-end;
    text-align: center;    
    ${props => props.bkpmd} {
        flex-direction: column;
    }
`;
