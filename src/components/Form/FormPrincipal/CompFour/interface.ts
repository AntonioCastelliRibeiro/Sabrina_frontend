import { ThemeOptions } from "@mui/material";

export interface ITheme {
    textAlign?: "start" | "end" | "left" | "right" | "center" | "justify" | "match-parent";
    theme: ThemeOptions;
}


export interface IData {
    icon: React.ReactNode,
    title: string,
    subtitle: string,
}