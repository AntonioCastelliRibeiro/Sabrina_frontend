import React from "react";

export interface IMyButton {
    bgcolorhover: string;
    colorhover: string;
    bgcolorselect?: string;
    colortypo?: string;
    myfontweight?: number;
    fontweighthover?: number;
    startIcon?: React.ReactNode;
    onClick(AParam: any): any;
}

export interface IButtonComp {
    bgcolor?: string;
    children?: React.ReactNode;
}