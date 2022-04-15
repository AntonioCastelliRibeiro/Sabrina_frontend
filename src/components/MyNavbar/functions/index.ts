import { IPage } from './interface';

export function returnBgColor(APage: string, onPage: IPage, ABgColor: string): string {      
          
        if ((APage === 'Início') && (onPage.inicio)) {
                return ABgColor;
        } else if ((APage === 'Serviços') && (onPage.serviços)) {
                return ABgColor
        } else if ((APage === 'Sobre') && (onPage.sobre)) {
                return ABgColor
        } 
        else {
                return ''
        }
}