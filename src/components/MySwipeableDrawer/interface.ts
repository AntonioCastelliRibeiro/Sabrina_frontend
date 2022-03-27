import { Theme } from "@mui/material";

export interface IMySwipeableDrawer {
    openModal: boolean;
    setCloseModal(): any;
    window?: Window;
}

export interface ITheme {
    theme: Theme;
}

export interface IContentPuller extends ITheme {
    openModal: boolean;
    theme: Theme;
}