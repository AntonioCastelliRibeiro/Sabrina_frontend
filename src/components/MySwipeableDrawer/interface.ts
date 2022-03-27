import { Theme } from "@mui/material";
import { BaseTheme } from "@mui/material/styles/createTheme";

export interface IMySwipeableDrawer {
    openModal: boolean;
    setCloseModal(): any;
    window?: Window;
}

export interface ITheme {
    theme: BaseTheme;
}

export interface IContentPuller extends ITheme {
    openModal: boolean;
    theme: BaseTheme;
}