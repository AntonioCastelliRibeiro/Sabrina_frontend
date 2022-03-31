import { Card, CardMedia, Container, Stack } from "@mui/material";
import {
  CardActionAreaComp,
  TypographyTitle,
  TypographySubTitle,
  TypographyDesc,
  StackContent
} from "./styles";
import { data } from "./data";

export default function CardImage() {
  return (
      <Container maxWidth="xl">
          <Stack pt={10}>
            <CardActionAreaComp>
                <StackContent
                    spacing={2}
                    p={{ xs: 2, sm: 4, md: 4, lg: 8, xl: 8 }}
                    direction={{ xs: "column", sm: "column", md: "row" }}
                >
                    <Stack
                    spacing={{ xs: 2, sm: 2, md: 2, lg: 0 }}
                    pl={{ xs: 0, sm: 0, md: 2, lg: 2, xl: 2 }}
                    >
                        <TypographyTitle children={data.textFirst} />
                        <TypographySubTitle children={data.textSec} />
                        <TypographyDesc children={data.textThir} />
                    </Stack>
                    <Stack justifyContent="center" width="100%">
                        <Card elevation={0} sx={{ height: "300px", width: "100%" }}>
                            <CardMedia
                            sx={{ height: "inherit", width: "100%" }}
                            image={data.img}
                            />
                        </Card>
                    </Stack>
                </StackContent>
            </CardActionAreaComp>
        </Stack>
    </Container>
  );
}
