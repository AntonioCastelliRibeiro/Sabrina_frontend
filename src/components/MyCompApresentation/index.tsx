import { Stack } from "@mui/material";
import {
  TypographyDesc,
  TypographyTitle,
  TypographySubDesc,
  ImageComp,
  ContentImage,
  ImgFrame
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
        <Stack width="100%" justifyContent="end" alignItems="end" children={<ImgFrame src={data.imgIcon} />} />
      </ContentImage>
    </Stack>
  );
}
