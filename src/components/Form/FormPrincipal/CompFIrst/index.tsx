import { Stack } from "@mui/material";
import CompDescTop from "../CompDescTop";
import CompHoverSec from "./CompHoverSec";
import MyCompApresentation from "../../../MyCompApresentation";
import { dataDesc } from "./data";
import MyCardImageDesc from "../../../MyCardImageDesc";
import CompHoverBtn from "../CompHoverBtn";

export default function CompFirst() {
    return (
        <Stack>
            <Stack pb={10} children={<MyCompApresentation />} />
            <Stack pb={10} children={<MyCardImageDesc />} />
            <Stack pb={10} children={<CompHoverBtn />} />
            <CompDescTop title={dataDesc.title} subTitle={dataDesc.subTitle} />
            <CompHoverSec />
        </Stack>
    )
}