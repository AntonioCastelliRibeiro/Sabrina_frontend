import { Container, Stack, useTheme } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { dataCardColorInfo } from "./data";
import { Content, TypograpyDesc, TypograpyTitle } from "./styles";
import { MyButton } from "../MyButton/styles";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function MyCardColorInfo() {
  const theme = useTheme();
  return (
    <Container sx={{ pt: 10 }} maxWidth="xl">
      <Content p={2} spacing={5} img={dataCardColorInfo.img}>
        <Stack p={1} bgcolor="#6a1b9a" borderRadius={"9px"}>
          <TypograpyTitle children={dataCardColorInfo.title} />
        </Stack>
        <Stack pl={2} pr={2}>
          <MyButton
            startIcon={<WhatsAppIcon />}
            size="large"
            onClick={() => false}
            children={dataCardColorInfo.button}
            bgcolorselect={theme.palette.primary.main}
            bgcolorhover={theme.palette.secondary.main}
            colorhover={theme.palette.primary.light}
            />
        </Stack>
        <Stack direction={{xs: "column", sm: "column", md: "row"}} spacing={2} p={1} bgcolor="#6a1b9a" borderRadius={"9px"}>
          <Stack direction="row" spacing={1}>
            <CheckIcon sx={{ height: 20, width: 20 }} />
            <TypograpyDesc children={dataCardColorInfo.descLeft} />
          </Stack>
          <Stack direction="row" spacing={1}>
            <CheckIcon sx={{ height: 20, width: 20 }} />
            <TypograpyDesc children={dataCardColorInfo.descCenter} />
          </Stack>
          <Stack direction="row" spacing={1} pr={2}>
            <CheckIcon sx={{ height: 20, width: 20 }} />
            <TypograpyDesc children={dataCardColorInfo.descRight} />
          </Stack>
        </Stack>
      </Content>
    </Container>
  );
}
