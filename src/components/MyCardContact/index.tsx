import { Card, CardActionArea, Stack } from "@mui/material";
import { TypographyBg, TypographyTitle, TypographySubTitle, CardComp } from "./styles";
import { IPropsCardContact } from "./interface";
import theme from "../../theme";

export default function CardContact(props: IPropsCardContact) {
  return (
    <Stack spacing={5} direction="column">
      <CardComp>
        <CardActionArea sx={{ height: "inherit", minHeight: "inherit", color: theme.palette.secondary.main }}>
          <Stack p={3} spacing={1} alignItems="left" justifyContent="center">
            <TypographyBg variant="h1" children={props.descBg} />
            <TypographyTitle children={props.desctitle} />
            <TypographySubTitle children={props.descSubTitle} />
          </Stack>
        </CardActionArea>
      </CardComp>
    </Stack>
  );
}
