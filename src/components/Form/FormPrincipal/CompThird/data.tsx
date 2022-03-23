import { IData } from './interface';
import { IData as IDataDesc } from "../CompDescTop/interface";

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';


export const dataDesc: IDataDesc = {
    title: "Nossos Serviços",
    subTitle: "Ganhe de 17 a 700 seguidores reais e brasileiros todos os dias no seu instagram. Não precisa informar a senha e nem seguir ninguém de volta."
}

export const data: IData[] = [
    {
        icon: <InstagramIcon fontSize="large" />,
        title: "Curtidas",
        subtitle: "Ganhe de 17 a 700 seguidores reais e brasileiros todos os dias no seu instagram. Não precisa informar a senha e nem seguir ninguém de volta."
    },
    {
        icon: <FacebookIcon fontSize="large" />,
        title: "Comentários",
        subtitle: "Ganhe de 17 a 700 seguidores reais e brasileiros todos os dias no seu instagram. Não precisa informar a senha e nem seguir ninguém de volta."
    },
    {
        icon: <TwitterIcon fontSize="large" />,
        title: "Seguidores",
        subtitle: "Ganhe de 17 a 700 seguidores reais e brasileiros todos os dias no seu instagram. Não precisa informar a senha e nem seguir ninguém de volta."
    }
]