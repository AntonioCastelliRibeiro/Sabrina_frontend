import { Stack } from "@mui/material";
import { useEffect, useRef } from "react";
import CountUp from "react-countup";
import { IProps } from "./interface";
import { CardActionAreaComp, CountComp, TitleComp } from "./styles";

export default function MyCardCountInfo(props: IProps) {
    const refCardAction = useRef<HTMLButtonElement>(null);
    useEffect(()=>{
        if (refCardAction.current !== null) {
            refCardAction.current.click();
        }
    }, []);
  return (
    <CountUp prefix="+" suffix="K" start={0} end={props.count}>
      {({ countUpRef, start }) => (
        <Stack spacing={5} direction="column">
            <CardActionAreaComp ref={refCardAction} onClick={start}>
              <Stack
                spacing={1}
                alignItems="center"
                justifyContent="center"
                direction={{ xs: "column", sm: "column", md: "row" }}
              >
                <CountComp variant="h4" ref={countUpRef} />
                <TitleComp variant="h5" children={props.subTitle} />
              </Stack>
            </CardActionAreaComp>
        </Stack>
      )}
    </CountUp>
  );
}
