import { Theme } from "@mui/material";

export interface ITheme {
    textAlign?: "start" | "end" | "left" | "right" | "center" | "justify" | "match-parent";
    theme: Theme;
}

export interface IData {
    icon: React.ReactNode,
    title: string,
    subtitle: string,
}