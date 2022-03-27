import { Theme } from "@mui/material";
import { BaseTheme } from "@mui/material/styles/createTheme";

export interface ITheme {
    textAlign?: "start" | "end" | "left" | "right" | "center" | "justify" | "match-parent";
    theme: BaseTheme;
}


export interface IData {
    icon: React.ReactNode,
    title: string,
    subtitle: string,
}