import { BaseTheme } from "@mui/material/styles/createTheme";

export interface ITheme {
    textAlign?: "start" | "end" | "left" | "right" | "center" | "justify" | "match-parent";
    theme: BaseTheme;
}

export interface IData {
    title: string,
    subTitle: string
}

export interface IProps {
    data: IData;
}