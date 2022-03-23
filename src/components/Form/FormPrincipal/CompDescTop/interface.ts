import { ThemeOptions } from "@mui/material";

export interface ITheme {
    textAlign?: "start" | "end" | "left" | "right" | "center" | "justify" | "match-parent";
    theme: ThemeOptions;
}

export interface IData {
    title: string,
    subTitle: string
}

export interface IProps {
    data: IData;
}