import { CardActionArea, Stack } from "@mui/material";
import { TypographyBg, TypographyTitle, TypographySubTitle, CardComp } from "./styles";
import { IPropsCardContact } from "./interface";
import theme from "../../theme";

export default function CardContact(props: IPropsCardContact) {
  return (
    <Stack spacing={5} direction="column">
      <CardComp>
        <CardActionArea sx={{ height: "inherit", minHeight: "inherit", color: theme.palette.secondary.main }}>
        <Stack pl={3} direction={"row"}>
            <Stack>
              <TypographyBg variant="h1" children={props.descBg} />
            </Stack>
            <Stack p={2} spacing={1} alignItems="left" justifyContent="center">
              <TypographyTitle children={props.desctitle} />
              <TypographySubTitle children={props.descSubTitle} />
            </Stack>
          </Stack>
        </CardActionArea>
      </CardComp>
    </Stack>
  );
}
