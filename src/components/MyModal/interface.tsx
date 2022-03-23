import { IImages } from "../MyImageMasonry/interface";

interface IDataModal {
    open: boolean;
    img: string;
}

export default interface IMyModal {
    // setOpen(AOpen: boolean): any;
    pathname: string;
    data: IImages[];
    // dataModal: IDataModal;
}