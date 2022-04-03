import HomeIcon from '@mui/icons-material/Home';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import AddBoxIcon from '@mui/icons-material/AddBox';
import InfoIcon from '@mui/icons-material/Info';
import AddCommentIcon from '@mui/icons-material/AddComment';
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