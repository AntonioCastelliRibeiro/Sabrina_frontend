import { Stack } from "@mui/material";
import {
  CardMediaComp,
  TypographyDescTop,
  TypographyTitle,
  TypographyDesc,
  TypographyDescMd,
  Content,
  CardActionAreaComp,
  ContentDesc
} from "./styles";
import { dataMyCardImageDesc } from "./data";

export default function MyCardImageDesc() {
  return (
    <Stack spacing={2} flexDirection={"column"}>
      <Content
        spacing={2}
        pt={2}
        direction={{ xs: "row-reverse", sm: "row-reverse" }}
      >
        <ContentDesc>
          <TypographyDescTop children={dataMyCardImageDesc.descTop} />
          <TypographyTitle children={dataMyCardImageDesc.title} />
          <TypographyDesc children={dataMyCardImageDesc.descBot} />
        </ContentDesc>
        <Stack width="50%">
          <CardActionAreaComp>
            <CardMediaComp image={dataMyCardImageDesc.img} />
          </CardActionAreaComp>
        </Stack>
      </Content>
      <TypographyDescMd children={dataMyCardImageDesc.descBot} />
    </Stack>
  );
}
