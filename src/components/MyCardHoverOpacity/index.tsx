import {
    Stack,
    Typography
  } from "@mui/material";

import { IPropsMyCardHoverOpacity } from "./interface";
import { CardComp, CardMediaComp, ContentDesc } from "./styles";

export default function MyCardHoverOpacity(props: IPropsMyCardHoverOpacity) {
  return (
    <Stack
      pl={2}
      height="100%"
      alignItems="center"
      justifyContent="center"
    >
      <CardComp>
        <CardMediaComp image={props.img} />
        <ContentDesc>
          <Stack
            sx={{ backgroundColor: "#ffffff36" }}
            alignItems="center"
            justifyContent="center"
            width="100%"
            height="70px"
          >
            <Typography
              variant="h3"
              color="#fff"
              fontWeight="bold"
              children={props.text}
            />
          </Stack>
        </ContentDesc>
      </CardComp>
    </Stack>
  );
}
  