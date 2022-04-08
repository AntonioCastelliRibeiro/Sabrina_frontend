import { Star } from "@mui/icons-material";
import { Box, Paper, Avatar, Stack } from "@mui/material";
import { ICardCarrousel } from "./interface";
import { TypographyCharge, TypographyName, TypographyTitle } from "./styles";

export default function CardCrSel(props: ICardCarrousel) {
  return (
    <Box
      display="flex"
      justifyContent="space-evenly"
      flexDirection="column"
      alignItems="center"
      sx={{      
        userSelect: "none",
        overflow: "hidden",
        width: "100%",
        background: "inherit"
      }}
      minHeight={"450px"}
    >
      <Stack
        spacing={2}
        display="flex"
        justifyContent="space-evenly"
        flexDirection="column"
        alignItems="center"
      >
        <Paper style={{ borderRadius: "36px" }}>
          <Avatar
            style={{ height: 70, width: 70 }}
            alt="Imagem Opinião de Usuário"
            src={props.img}
          />
        </Paper>
        <TypographyTitle variant={"h6"} children={props.desc} />
        <Stack alignItems="center" spacing={0.1}>
          <TypographyName variant="h6" children={props.name} />
          <TypographyCharge variant="body2" children={props.charge} />
          <Stack direction="row">
            <Star style={{ color: "#ff9800" }} />
            <Star style={{ color: "#ff9800" }} />
            <Star style={{ color: "#ff9800" }} />
            <Star style={{ color: "#ff9800" }} />
            <Star style={{ color: "#ff9800" }} />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
