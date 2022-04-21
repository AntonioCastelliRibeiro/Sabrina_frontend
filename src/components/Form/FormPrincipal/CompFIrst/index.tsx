import { Stack } from "@mui/material";
import CompDescTop from "../CompDescTop";
import CompHoverSec from "./CompHoverSec";
import MyCompApresentation from "../../../MyCompApresentation";
import { dataDesc } from "./data";
import MyCardImageDesc from "../../../MyCardImageDesc";

export default function CompFirst(){
    return (
        <Stack>
            <Stack pb={10} children={<MyCompApresentation />} />
            <Stack pb={10} children={<MyCardImageDesc />} />
            <CompDescTop title={dataDesc.title} subTitle={dataDesc.subTitle} />
            <CompHoverSec />
        </Stack>
    )
}