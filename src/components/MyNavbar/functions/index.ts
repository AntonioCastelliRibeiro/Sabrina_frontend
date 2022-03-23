import { IPage } from './interface';

export function returnBgColor(APage: string, onPage: IPage): string {
    const C_BG_COLOR = '#ffffff34';
    if ((APage === 'Início') && (onPage.inicio)) {
            return C_BG_COLOR
    } else if ((APage === 'Disponíveis') && (onPage.disponiveis)) {
            return C_BG_COLOR
    } else if ((APage === 'Sobre') && (onPage.sobre)) {
            return C_BG_COLOR
    } else {
        return ''
    }
}