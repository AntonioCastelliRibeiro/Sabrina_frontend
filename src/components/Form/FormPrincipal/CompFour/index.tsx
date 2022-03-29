import React, { useEffect, useState } from "react";
import { Grid, Stack, useMediaQuery, useTheme } from "@mui/material";
import { AnimatePresence, motion } from 'framer-motion';
import { data } from "./data";
import { CardActionAreaComp, ContainerComp, ContentIconMdDown, ContentIconMdUp, TransitionComp, TypograpySubTitle, TypograpyTitle } from "./styles";
import { transition } from "../../FormAbout/motion";
import { IData } from "./interface";

export default function CompFour() {
    const theme = useTheme();
    const isDownMd = useMediaQuery(theme.breakpoints.down('md'));
    const [icon, setIcon] = useState(data[0].icon);
    const [dataComp, setDataComp] = useState<IData[]>(data);

    useEffect(()=>{
        setDataComp(data);        
    }, []);

    const handleImg = (AIcon: React.ReactNode, AId: number) => {
        let newData = dataComp;
        dataComp.map((data, key)=>{
            newData[key].selected = data.id === AId;
            return setDataComp(newData);
        });
        setIcon(AIcon);
    }

    return (
        <ContainerComp theme={theme} maxWidth="lg" >
            <TransitionComp {...transition} >
                <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }}>
                    <Stack justifyContent={"center"} width="100%" >
                        <AnimatePresence>
                            {isDownMd ? <Stack direction="row">{dataComp.map((data)=>(<ContentIconMdDown children={data.icon} />))}</Stack> : <ContentIconMdUp children={icon} />}
                        </AnimatePresence>
                    </Stack>
                    <Grid container spacing={isDownMd ? 0 : 2} style={{ margin: 0, width: "100%" }}>
                        {dataComp.map((data, key) => (
                            <Grid
                                item
                                key={key}
                                style={{ margin: 0, paddingTop: "16px" }}
                                xs={12}
                                sm={12}
                                md={12}
                                lg={12}
                                xl={12}
                            >
                                <motion.div onHoverStart={() => handleImg(data.icon, data.id)} >
                                    <CardActionAreaComp selected={isDownMd ? true : data.selected} theme={theme}>
                                        <Stack alignItems={"center"} spacing={2}>
                                            <TypograpyTitle theme={theme} children={data.title} />
                                            <ContainerComp theme={theme} maxWidth="sm" >
                                                <TypograpySubTitle theme={theme} children={data.subtitle} />
                                            </ContainerComp>
                                        </Stack>
                                    </CardActionAreaComp>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </Stack>
            </TransitionComp>
        </ContainerComp >

    )
}