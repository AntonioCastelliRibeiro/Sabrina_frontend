import { Container, Stack, Avatar } from "@mui/material";
import {
  CardActionAreaComp,
  TypographyTitle,
  TypographySubTitle,
  StackAvatar
} from "./styles";
import { data } from "./data";
import { IProps } from "./interface";

export default function MyCardSocial(props: IProps) {
  return (
      <CardActionAreaComp>
        <Stack
          p={2}
          height="100%"
          direction={{ xs: "column", sm: "row", md: "row" }}
        >
          <StackAvatar pb={{ xs: 2, sm: 0 }}>
            <Avatar src={props.data.img} sx={{ height: "80px", width: "80px" }} />
          </StackAvatar>
          <Stack
            spacing={{ xs: 0.5, sm: 0.5 }}
            pl={{ xs: 0, sm: 2 }}
            width="100%"
          >
            <TypographyTitle variant="h6" children={props.data.textTitle} />
            <TypographySubTitle variant="body1" children={props.data.textSubTitle} />
          </Stack>
        </Stack>
      </CardActionAreaComp>
  );
}
