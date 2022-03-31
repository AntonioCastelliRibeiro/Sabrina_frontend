import { IData } from './interface';
import { IData as IDataDesc } from "../../CompDescTop/interface";

import AddCommentIcon from '@mui/icons-material/AddComment';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { ContentMotionIcon } from './styles';


export const dataDesc: IDataDesc = {
    title: "Nossos Serviços",
    subTitle: "Ganhe de 17 a 700 seguidores reais e brasileiros todos os dias no seu instagram. Não precisa informar a senha e nem seguir ninguém de volta."
}

export const data: IData[] = [
    {
        id: 0,
        icon: <ContentMotionIcon transition={{ duration: 2, type: "tween" }} exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} children={<ThumbUpIcon color="secondary" style={{ height: "100%", width: "100%" }} />} />,
        title: "Curtidas",
        subtitle: "Ganhe de 17 a 700 curtidas reais e brasileiros todos os dias no seu instagram. Não precisa informar a senha e nem seguir ninguém de volta.",
        selected: true,
    },
    {
        id: 1,
        icon: <ContentMotionIcon transition={{ duration: 2, type: "tween" }} exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} children={<AddCommentIcon color="secondary" style={{ height: "100%", width: "100%" }} />} />,
        title: "Comentários",
        subtitle: "Ganhe de 17 a 700 comentários reais e brasileiros todos os dias no seu instagram. Não precisa informar a senha e nem seguir ninguém de volta.",
        selected: false,
    },
    {
        id: 2,
        icon: <ContentMotionIcon transition={{ duration: 2, type: "tween" }} exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} children={<AddBoxIcon color="secondary" style={{ height: "100%", width: "100%" }} />} />,
        title: "Seguidores",
        subtitle: "Ganhe de 17 a 700 seguidores reais e brasileiros todos os dias no seu instagram. Não precisa informar a senha e nem seguir ninguém de volta.",
        selected: false,
    }
]

// export const IconData = {
//     iconLike: <ThumbUpIcon fontSize="large" />,
//     iconComments: <AddCommentIcon fontSize="large" />,
//     iconFollow: <AddBoxIcon fontSize="large" />,
// }