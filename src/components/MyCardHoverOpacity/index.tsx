import {
    Stack,
    Typography,
    useTheme
  } from "@mui/material";

import { IPropsMyCardHoverOpacity } from "./interface";
import { CardComp, CardMediaComp, ContentDesc } from "./styles";

export default function MyCardHoverOpacity(props: IPropsMyCardHoverOpacity) {
  const theme = useTheme();
  return (
    <Stack
      height="100%"
      alignItems="center"
      justifyContent="center"
    >
      <CardComp>
        <CardMediaComp image={props.img} />
        <ContentDesc>
          <Stack
            sx={{ backgroundColor: "#ffffff3d" }}
            alignItems="center"
            justifyContent="center"
            width="100%"
            height="70px"
          >
            <Typography
              variant="h3"
              color={theme.palette.secondary.light}
              fontWeight="800"
              children={props.text}
            />
          </Stack>
        </ContentDesc>
      </CardComp>
    </Stack>
  );
}
  