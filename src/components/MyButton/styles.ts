import { Button } from "@mui/material";
import styled from "styled-components";
import { IMyButton } from "./interface";


export const MyButton = styled(Button)<IMyButton>`
    background-color: ${props => props.bgcolorselect};
    color: ${props => props.colortypo || "#fff"};
    border-color: #fff;
    font-weight: ${props => props.myfontweight};
    &:hover {
        background-color: ${props => props.bgcolorhover};
        border-color: #fff;
        color: ${props => props.colorhover};
        font-weight: ${props => props.fontweighthover || 0};
    }

    font-size: ${props => props.theme.typography.body1};
    ${props => props.theme.breakpoints.down('sm')} {
        font-size: ${props => props.theme.typography.body2};
    }
`;