import { useState } from "react";
import {
  AccordionDetails,
  AccordionSummary,
  useTheme,
  Stack,
  useMediaQuery
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AccordionComp, CardActionAreaComp, DividerComp, TypographyDesc, TypographySubTitle, TypographyTitle } from "./styles";
import { IdataCompSecAbout } from "../Form/FormAbout/CompSecAbout/interface";

export default function AccordionBoubt(props: IdataCompSecAbout) {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down("md"));
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <AccordionComp expanded={expanded} onChange={() => setExpanded(!expanded)} >
      <CardActionAreaComp expanded={expanded}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: theme.palette.secondary.light }} />}>
          <Stack direction={{ xs: "column" }}>
            <TypographyTitle children={props.title} />
            <TypographySubTitle variant="body2" >
                {
                    (isMd ? "Pressione" : "Clique") + " para " + (expanded ? "Retrair" : "Expandir")
                }
            </TypographySubTitle>
          </Stack>
        </AccordionSummary>
      </CardActionAreaComp>
      <DividerComp />
      <AccordionDetails sx={{ pt: "16px" }}>
        <TypographyDesc children={props.desc} />
      </AccordionDetails>
    </AccordionComp>
  );
}
