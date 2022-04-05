import { Box, Button, Card, CardMedia, Container, Stack } from "@mui/material";
import {
  CardActionAreaComp,
  TypographyTitle,
  TypographySubTitle,
  TypographyDesc,
  StackContent,
  ButtonComp,
  CardComp
} from "./styles";
import EastIcon from "@mui/icons-material/East";

import { data } from "./data";

export default function CardInfo() {
  return (
      <Container maxWidth="xl">
          <Stack pt={10}>
                <StackContent
                    spacing={2}
                    direction={{ xs: "column", sm: "column", md: "column", lg: 'row' }}
                >
                    <Stack justifyContent="center" width="100%">
                        <Box pb={{ xs: 2, sm: 2, md: 1, lg: 1, xl: 1 }}>
                            <TypographyTitle children={data.textFirst} />
                        </Box>
                        <CardActionAreaComp>
                            <CardComp>
                                <CardMedia
                                    sx={{ height: "inherit", width: "100%" }}
                                    image={data.img}
                                />
                            </CardComp>
                        </CardActionAreaComp>
                    </Stack>
                    <Stack
                        spacing={{ xs: 2, sm: 2, md: 2, lg: 2 }}
                        pl={{ xs: 0, sm: 0, md: 2, lg: 2, xl: 2 }}
                        pt={{ xs: 0, sm: 0, md: 2, lg: 17, xl: 7 }}
                    >
                        <TypographySubTitle children={data.textSec} />
                        <Stack spacing={2}>
                            <ButtonComp
                                color="primary"
                                variant="outlined"
                                startIcon={<EastIcon color="secondary" />}
                                children={<TypographyDesc children={data.textThir} />}
                            />
                            <ButtonComp
                                color="primary"
                                variant="outlined"
                                startIcon={<EastIcon color="secondary" />}
                                children={<TypographyDesc children={data.textFour} />}
                            />
                            <ButtonComp
                                color="primary"
                                variant="outlined"
                                startIcon={<EastIcon color="secondary" />}
                                children={<TypographyDesc children={data.textFive} />}
                            />
                            <ButtonComp
                                color="primary"
                                variant="outlined"
                                startIcon={<EastIcon color="secondary" />}
                                children={<TypographyDesc children={data.textSix} />}
                            />
                            <ButtonComp
                                color="primary"
                                variant="outlined"
                                startIcon={<EastIcon color="secondary" />}
                                children={<TypographyDesc children={data.textSev} />}
                            />
                            <ButtonComp
                                color="primary"
                                variant="outlined"
                                startIcon={<EastIcon color="secondary" />}
                                children={<TypographyDesc children={data.textEig} />}
                            />
                        </Stack>
                    </Stack>
                </StackContent>
        </Stack>
    </Container>
  );
}
