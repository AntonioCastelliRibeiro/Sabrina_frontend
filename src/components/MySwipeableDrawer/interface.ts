import { ThemeOptions } from "@mui/material";

export interface IMySwipeableDrawer {
    openModal: boolean;
    setCloseModal(): any;
    window?: Window;
}

export interface ITheme {
    theme: ThemeOptions;
}

export interface IContentPuller extends ITheme {
    openModal: boolean;
}