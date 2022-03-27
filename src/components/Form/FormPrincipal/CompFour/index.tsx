import React, { useEffect, useState } from "react";
import { Grid, Stack, useTheme } from "@mui/material";
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { data } from "./data";
import { CardActionAreaComp, ContainerComp, TransitionComp, TypograpySubTitle, TypograpyTitle } from "./styles";
import { transition } from "../../FormAbout/motion";



export default function CompFour() {
    const theme = useTheme();
    const [icon, setIcon] = useState(data[0].icon);
    // const controlerImg = useAnimation();
    // useEffect(() => {
    //     sequenceTransition();
    // }, [icon]);

    // const sequenceTransition = async () => {
    //     await controlerImg.start({ opacity: 0 });
    //     return await controlerImg.start({ opacity: 1 });
    // }

    const handleImg = (AIcon: React.ReactNode) => {
        setIcon(AIcon);
    }

    return (
        <ContainerComp theme={theme} maxWidth="lg" >
            <TransitionComp {...transition} >
                <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }}>
                    <Stack width="100%" >
                        <AnimatePresence>
                            {icon}
                        </AnimatePresence>
                    </Stack>
                    <Grid container spacing={2} style={{ margin: 0, width: "100%" }}>
                        {data.map((data, key) => (
                            <Grid
                                item
                                key={key}
                                style={{ margin: 0 }}
                                xs={12}
                                sm={12}
                                md={12}
                                lg={12}
                                xl={12}
                            >
                                <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} onHoverStart={() => handleImg(data.icon)} >
                                    <CardActionAreaComp theme={theme}>
                                        <Stack alignItems={"center"} spacing={2}>
                                            {/* <div children={data.icon} /> */}
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