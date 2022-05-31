import { Grid, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import MyCardHoverButton from "../../../MyCardHoverButton";
import { dataCardHoverButton } from "./data";

export default function CompHoverBtn() {
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Grid spacing={isMd ? 0 : 2} container sx={{ margin: 0 }}>
            {dataCardHoverButton.map((AData, AKey) => (
                <Grid key={AKey} item sx={{ margin: 0, pl: 0, pt: 2 }} xs={12} sm={12} md={4}>
                    <MyCardHoverButton {...AData} />
                </Grid>
            ))}
        </Grid>
    )
}