export interface ITheme {
    textAlign?: "start" | "end" | "left" | "right" | "center" | "justify" | "match-parent";
}

export interface IData {
    title: string,
    subTitle: string
}

export interface IProps {
    data: IData;
}