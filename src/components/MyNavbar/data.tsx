import HomeIcon from '@mui/icons-material/Home';
import AddBoxIcon from '@mui/icons-material/AddBox';
import InfoIcon from '@mui/icons-material/Info';
import { IPages } from './interface';

export const pages: IPages[] = [
    {
        page: 'Início',
        router: '/',
        icon: <HomeIcon />
    },
    {
        page: 'Serviços',
        router: '/servicos',
        icon: <AddBoxIcon />
    },
    {
        page: 'Sobre',
        router: '/sobre',
        icon: <InfoIcon />
    }
];