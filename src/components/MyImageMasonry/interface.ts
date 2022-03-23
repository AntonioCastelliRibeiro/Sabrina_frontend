export interface IDataModal {
    id: number;
    open: boolean;
    img: string;    
}

export interface IMyImageMasonry {
    data: IImages[];
    pathname: string;
    issuspense: boolean;
}

export interface IImages {
    id: number;
    img: string;
    title: string;
}