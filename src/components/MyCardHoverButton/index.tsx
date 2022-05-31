import { Stack, Typography } from "@mui/material";
import {
  CardComp,
  ContentTitle,
  ContentDesc,
  ContentBtn,
  CardActionAreaComp,
  CardMediaComp,
  ContentDescPrinc,
  ButtonComp,
  TypographyDesc,
  TypographyTitle
} from "./styles";
import { IMyCardHoverButton } from "./interface";

export default function MyCardHoverButton(props: IMyCardHoverButton) {
  return (
    <Stack>
      <CardComp>
        <CardActionAreaComp sx={{ color: "#fff",  }}>
          <CardMediaComp image={props.img}>
            <ContentDescPrinc spacing={2}>
              <ContentTitle pl={2}>
                <TypographyTitle width={props.width} variant="h4" children={props.title} />
              </ContentTitle>
              <ContentDesc pl={2}>
                <TypographyDesc
                  variant="body1"
                  children={props.desc}
                />
              </ContentDesc>
              <ContentBtn>
                <ButtonComp children={<Typography variant="body2" textTransform={"uppercase"} children={props.descBtn} />} />
              </ContentBtn>
            </ContentDescPrinc>
          </CardMediaComp>
        </CardActionAreaComp>
      </CardComp>
    </Stack>
  );
}
