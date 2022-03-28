import React, { useEffect, useState } from 'react';
import { Toolbar, CssBaseline, useScrollTrigger, Slide, useTheme, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { IMyNavbar } from './interface';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppBarComp, IconButtonMenu, StackComp, TypograpyComp } from './styles';
import { pages } from './data';
import { returnBgColor } from "./functions";
import { MyButton } from '../MyButton/styles';

export default function MyNavbar(props: IMyNavbar) {
    const theme = useTheme();
    const location = useLocation();
    const navigate = useNavigate();
    const { window } = props;
    const trigger = useScrollTrigger({ target: window ? window() : undefined, });
    const [onPage, setPage] = useState({ inicio: false, seguidores: false, curtidas: false, comentarios: false, sobre: false })

    useEffect(() => {
        console.log(theme.typography);
        setPage({
            inicio: (location.pathname === '/'),
            seguidores: (location.pathname === '/seguidores'),
            curtidas: (location.pathname === '/curtidas'),
            comentarios: (location.pathname === '/comentarios'),
            sobre: (location.pathname === '/sobre'),

        });
    }, [location.pathname]);

    const handleClick = (APage: string) => (
        navigate(APage)
    )

    return (
        <Box>
            <CssBaseline />
            <Slide appear={false} direction="down" in={!trigger}>
                <AppBarComp elevation={0} theme={theme}>
                    <Toolbar>
                        <TypograpyComp
                            variant="h6"
                            noWrap
                            sx={{ mr: 2 }}
                            theme={theme}
                        >
                            Mundi Seguidores
                        </TypograpyComp>
                        <StackComp theme={theme} direction="row" spacing={1}>
                            {pages.map((data) => (
                                <MyButton
                                    sx={{ fontSize: { 
                                            xs: theme.typography.body2.fontSize, 
                                            sm: theme.typography.body2.fontSize, 
                                            md: theme.typography.body2.fontSize, 
                                            lg: theme.typography.body1.fontSize, 
                                            xl: theme.typography.body1.fontSize 
                                        } }}
                                    bgcolorselect={returnBgColor(data.page, onPage)}
                                    theme={theme}
                                    key={data.page}
                                    onClick={() => handleClick(data.router)}
                                    children={data.page}
                                    color="secondary"
                                    colorhover={theme.palette.secondary.light}
                                    bgcolorhover={theme.palette.primary.main}
                                    size="medium"
                                    startIcon={data.icon}
                                />
                            ))}
                        </StackComp>
                        <IconButtonMenu
                            size="large"
                            edge="start"
                            color="inherit"
                            theme={theme}
                            onClick={() => props.hanldeOpenModal()}
                        >
                            <MenuIcon />
                        </IconButtonMenu>
                    </Toolbar>
                </AppBarComp>
            </Slide>
            <Toolbar />
        </Box>
    );
}
