import React from 'react';
import Masonry from '@mui/lab/Masonry';
import { Container, ImgComp, List, CardActionAreaComp, SkeletonComp } from "./styles";
import { useNavigate } from 'react-router-dom';
import { IMyImageMasonry } from './interface';
import { transition } from '../Form/FormAbout/motion';
import { TransitionComp } from '../Form/FormPrincipal/CompDescTop/styles';
import { Grid, useTheme } from '@mui/material';

export default function MyImageMasonry(props: IMyImageMasonry) {
    const theme = useTheme();
    const navigate = useNavigate();

    const handleClickImg = (id: number)=> (
        setTimeout(() => {
            navigate(props.pathname + id.toString());
        }, 100)
    )

    function retornarData(){
        if (props.issuspense) {
            return (
                <Grid container spacing={0.1} style={{margin: 0}} >
                    {props.data.map((item, index) => (
                        <Grid  
                            xs={12}
                            sm={12}
                            md={6}
                            lg={4}
                            xl={3}
                            style={{width: "100%", height: "300px"}} 
                            item 
                            key={index}
                        >
                            <SkeletonComp bgcolor={theme.palette.primary.main} />
                        </Grid>
                    ))}
                </Grid>
            )
        } else {
            return (
                <Masonry columns={{ xs: 1, sm: 1, md: 2, lg: 3, xl: 4 }} spacing={0.1} >
                    {props.data.map((item, index) => (
                        <List key={index}>
                            <CardActionAreaComp>
                                {props.issuspense ? <h1>Suspense</h1> :
                                <ImgComp
                                    onClick={() => handleClickImg(item.id)}
                                    src={`${item.img}?w=162&auto=format`}
                                    srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                />}
                            </CardActionAreaComp>
                        </List>
                    ))}
                </Masonry>
            )
        }
    }

    return (
        <TransitionComp {...transition} >
            <Container>
                {retornarData()}
            </Container>
        </TransitionComp>
    );
}