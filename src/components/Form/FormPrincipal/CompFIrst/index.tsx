import { Stack } from "@mui/material";
import CompDescTop from "../CompDescTop";
import CompHoverSec from "./CompHoverSec";
import MyCompApresentation from "../../../MyCompApresentation";
import { dataDesc } from "./data";

export default function CompFirst(){
    return (
        <Stack>
            <Stack pb={10} children={<MyCompApresentation />} />
            <CompDescTop title={dataDesc.title} subTitle={dataDesc.subTitle} />
            <CompHoverSec />
        </Stack>
    )
}