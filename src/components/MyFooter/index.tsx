import React from "react";
import {
    Avatar,
    Box,
    IconButton,
    Divider,
    Typography,
    Link,
    useTheme,
    Stack,
} from "@mui/material";

import InstagramIcon from '@mui/icons-material/Instagram';
import { useNavigate } from "react-router-dom";
import { Content, ContentFlexLeft, ContentFlexLeftSec, ContentIcon, ContentLeft } from "./styles";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { MyButton } from "../MyButton/styles";
import { pages } from "../MyNavbar/data";

const Foot = function FootComp() {
    const navigate = useNavigate();
    const theme = useTheme();
    const bkpmd = theme.breakpoints.down('md');

    const handleClick = (APath: string) => {
        setTimeout(() => {
            navigate(APath);
        }, 300);
    }

    return (
        <Content backgroundColor={theme.palette.primary.dark}>
            <ContentLeft pt={8} pb={1}>
                <ContentFlexLeft bkpmd={bkpmd}>
                    <ContentFlexLeftSec bkpmd={bkpmd} >
                        <MyButton
                            theme={theme}
                            size="large"
                            onClick={() => handleClick('/')}
                            children="Mundi Seguidores"
                            bgcolorhover={theme.palette.secondary.main}
                            colorhover={theme.palette.primary.light}
                        />
                        <Stack direction={{ xs: "column", sm: "column", md: "row" }} spacing={{ xs: 1, sm: 1, md: 1 }}>
                            {pages.map((data, key) => (
                                <Stack key={key}>
                                    <MyButton
                                        theme={theme}
                                        key={data.page}
                                        onClick={() => handleClick(data.router)}
                                        bgcolorselect={theme.palette.primary.dark}
                                        bgcolorhover={theme.palette.secondary.main}
                                        colortypo={theme.palette.secondary.main}
                                        colorhover={theme.palette.primary.dark}
                                        fontweighthover={0}
                                        myfontweight={0}
                                        size="small"
                                        startIcon={data.icon}
                                        variant="contained"
                                        children={data.page}
                                        disableElevation
                                    />
                                </Stack>
                            ))}
                        </Stack>
                    </ContentFlexLeftSec>
                    <div
                        style={{
                            flexGrow: 1,
                            maxWidth: "500px",
                            marginLeft: "auto",
                            marginRight: "auto"
                        }}
                    >
                        <ContentIcon bkpmd={bkpmd} mt={{ xs: 2, md: 0 }} my={2}>
                            <Link href="https://api.whatsapp.com/message/V4E7OQ6A7KZXJ1?autoload=1&app_absent=0" target="_blank" children={<IconButton style={{ color: "#fff" }} size="medium" children={<WhatsAppIcon style={{ color: "#fff" }} />} />} />
                            <Link href="https://www.instagram.com/braian.otovicz" target="_blank" children={<IconButton style={{ color: "#fff" }} size="medium" children={<InstagramIcon style={{ color: "#fff" }} />} />} />
                        </ContentIcon>
                    </div>
                </ContentFlexLeft>
            </ContentLeft>
            <Divider style={{ backgroundColor: "#fff" }} />
            <Box pt={2} pb={10}>
                <Box py={1} textAlign={{ xs: "center", md: "right" }} >
                    <Typography
                        component={"p"}
                        variant={"caption"}
                        color={"textSecondary"}
                        style={{ color: "#fff", letterSpacing: "1px" }}
                    >
                        Designer Antonio Castelli © Tony Studios 2019-2022. Todos os
                        Direitos Reservados
                    </Typography>
                </Box>
            </Box>
        </Content>
    );
};

export default Foot;