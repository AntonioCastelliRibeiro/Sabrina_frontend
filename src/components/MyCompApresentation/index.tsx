import { Container, Stack } from "@mui/material";
import igprogress from "../../img/igprogress.png";
import {
  TypographyDesc,
  TypographyTitle,
  TypographySubDesc,
  ImageComp,
  ContentImage
} from "./styles";
import { data } from "./data";

export default function MyCompApresentation() {
  return (
    <Stack spacing={2} direction={{ xs: "column", sm: "column", md: "row" }}>
      <Stack spacing={2}>
        <Stack children={<TypographyTitle children={data.title} />} />
        <Stack children={<TypographyDesc children={data.desc} />} />
        <Stack children={<TypographySubDesc children={data.desc2} />} />
      </Stack>
      <ContentImage>
        <ImageComp src={data.img} />
      </ContentImage>
    </Stack>
  );
}
