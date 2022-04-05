import { Stack } from "@mui/material";
import CompDescTop from "../CompDescTop";
import CompHoverSec from "./CompHoverSec";
import { dataDesc } from "./data";

export default function CompFirst(){
    return (
        <Stack>
            <CompDescTop title={dataDesc.title} subTitle={dataDesc.subTitle} />
            <CompHoverSec />
        </Stack>
    )
}