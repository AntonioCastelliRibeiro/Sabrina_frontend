import { IDataCardSocial } from "./interface";

const imgFace = 'https://seguidores.storage.googleapis.com/images/menu-comprar-curtidas-postagens-facebook.svg?v=2';
const imginsta =  "https://seguidores.storage.googleapis.com/images/menu-comprar-salvos-instagram.svg?v=2";
const imgTikTok = 'https://seguidores.storage.googleapis.com/images/menu-comprar-curtidas-tiktok.svg?v=2';

export const dataInsta: IDataCardSocial[] = [
    {
        img: imginsta,
        textTitle: "Curtidas!",
        textSubTitle: "Experimente agora sem informar sua senha!",
    },
    {
        img: imginsta,
        textTitle: "Visualizações!",
        textSubTitle: "Experimente agora sem informar sua senha!",
    },
    {
        img: imginsta,
        textTitle: "Reels",
        textSubTitle: "Experimente agora sem informar sua senha!",
    }
];

export const dataFace: IDataCardSocial[] = [
    {
        img: imgFace,
        textTitle: "Curtidas!",
        textSubTitle: "Experimente agora sem informar sua senha!",
    },
    {
        img: imgFace,
        textTitle: "Visualizações!",
        textSubTitle: "Experimente agora sem informar sua senha!",
    },
    {
        img: imgFace,
        textTitle: "Compatilhamentos",
        textSubTitle: "Experimente agora sem informar sua senha!",
    },
];

export const dataTikTok: IDataCardSocial[] = [
    {
        img: imgTikTok,
        textTitle: "Curtidas!",
        textSubTitle: "Experimente agora sem informar sua senha!",
    },
    {
        img: imgTikTok,
        textTitle: "Visualizações!",
        textSubTitle: "Experimente agora sem informar sua senha!",
    },
    {
        img: imgTikTok,
        textTitle: "Compatilhamentos",
        textSubTitle: "Experimente agora sem informar sua senha!",
    },
];

export const dataTitle = {
    titleFirst: "Instagram",
    titleSec: "Facebook",
    titleThird: "TikTok"
}
  