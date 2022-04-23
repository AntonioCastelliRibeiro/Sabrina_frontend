import { Button, styled } from "@mui/material";
import { IMyButton } from "./interface";

export const MyButton = styled(Button)<IMyButton>(({ theme, bgcolorselect, colortypo, myfontweight, bgcolorhover, colorhover, fontweighthover }) => ({
    backgroundColor: bgcolorselect,
    color: colortypo || "#fff",
    borderColor: "#fff",
    fontWeight: myfontweight,

    
    // fontSize: theme.typography.h1.fontSize,
    // [theme.breakpoints.down("sm")]: {
    //     fontSize: theme.typography.h2.fontSize,
    // },
    
    "&:hover": {
        backgroundColor: bgcolorhover,
        borderColor: "#fff",
        color: colorhover,
        fontWeight: fontweighthover || 0,
    },
    transition: theme.transitions.easing.easeIn
}));

// export const MyButton = styled(Button)<IMyButton>`
//     background-color: ${props => props.bgcolorselect};
//     color: ${props => props.colortypo || "#fff"};
//     border-color: #fff;
//     font-weight: ${props => props.myfontweight};
//     &:hover {
//         background-color: ${props => props.bgcolorhover};
//         border-color: #fff;
//         color: ${props => props.colorhover};
//         font-weight: ${props => props.fontweighthover || 0};
//     }

//     font-size: ${props => props.theme.typography.body1};
//     ${props => props.theme.breakpoints.down('sm')} {
//         font-size: ${props => props.theme.typography.body2};
//     }
// `;