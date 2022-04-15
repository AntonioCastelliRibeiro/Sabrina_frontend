import { Stack, Rating } from "@mui/material";
import { ICardCarrousel } from "./interface";
import { AvatarComp, Content, ContentSec, TypographyCharge, TypographyName, TypographyTitle } from "./styles";

export default function MyCardOpinion(props: ICardCarrousel) {
  return (
    <Content>
      <ContentSec spacing={2}>
        <AvatarComp alt="Imagem Opinião de Usuário" src={props.img}/>
        <TypographyTitle children={props.desc} />
        <Stack pb={5} alignItems="center" spacing={0.1}>
          <TypographyName children={props.name} />
          <TypographyCharge children={props.charge} />
          <Rating value={5} readOnly />
        </Stack>
      </ContentSec>
    </Content>
  );
}
