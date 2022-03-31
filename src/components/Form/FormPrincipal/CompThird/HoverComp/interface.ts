import { Theme } from "@mui/material";

export interface ITheme {
    selected?: boolean;
    textAlign?: "start" | "end" | "left" | "right" | "center" | "justify" | "match-parent";
    theme: Theme;
}

export interface IData {
    id: number,
    icon: React.ReactNode,
    title: string,
    subtitle: string,
    selected: boolean
}