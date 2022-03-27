import { IData } from './interface';
import { IData as IDataDesc } from "../CompDescTop/interface";

import AddCommentIcon from '@mui/icons-material/AddComment';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import AddBoxIcon from '@mui/icons-material/AddBox';


export const dataDesc: IDataDesc = {
    title: "Nossos Serviços",
    subTitle: "Ganhe de 17 a 700 seguidores reais e brasileiros todos os dias no seu instagram. Não precisa informar a senha e nem seguir ninguém de volta."
}

export const data: IData[] = [
    {
        icon: <ThumbUpIcon fontSize="large" />,
        title: "Curtidas",
        subtitle: "Ganhe de 17 a 700 curtidas reais e brasileiros todos os dias no seu instagram. Não precisa informar a senha e nem seguir ninguém de volta."
    },
    {
        icon: <AddCommentIcon fontSize="large" />,
        title: "Comentários",
        subtitle: "Ganhe de 17 a 700 comentários reais e brasileiros todos os dias no seu instagram. Não precisa informar a senha e nem seguir ninguém de volta."
    },
    {
        icon: <AddBoxIcon fontSize="large" />,
        title: "Seguidores",
        subtitle: "Ganhe de 17 a 700 seguidores reais e brasileiros todos os dias no seu instagram. Não precisa informar a senha e nem seguir ninguém de volta."
    }
]