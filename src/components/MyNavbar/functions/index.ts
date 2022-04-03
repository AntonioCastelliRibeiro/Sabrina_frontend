import { IPage } from './interface';

export function returnBgColor(APage: string, onPage: IPage): string {
        const C_BG_COLOR = '#ffffff34';
        if ((APage === 'Início') && (onPage.inicio)) {
                return C_BG_COLOR
        } else if ((APage === 'Serviços') && (onPage.serviços)) {
                return C_BG_COLOR
        } else {
                return ''
        }
}