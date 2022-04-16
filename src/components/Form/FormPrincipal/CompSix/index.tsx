import { Container, Grid, useMediaQuery, useTheme } from "@mui/material";
import CardContact from "../../../MyCardContact";
import { IPropsCardContact } from "../../../MyCardContact/interface";
import CompDescTop from "../CompDescTop";


const data: IPropsCardContact[] = [
    {
        descBg: '1',
        desctitle: 'Escolha o Serviço',
        descSubTitle: 'Escolha qual dos nossos serviços você gostaria de contratar para crescer suas redes sociais.'
    },
    {
        descBg: '2',
        desctitle: 'Escolha o Serviço',
        descSubTitle: 'Escolha qual dos nossos serviços você gostaria de contratar para crescer suas redes sociais.'
    },
    {
        descBg: '3',
        desctitle: 'Escolha o Serviço',
        descSubTitle: 'Escolha qual dos nossos serviços você gostaria de contratar para crescer suas redes sociais.'
    }
]

export default function CompSix(){
    const theme = useTheme();
    const isDownMd = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Container maxWidth="xl"sx={{pt: 10}}>
            <CompDescTop title="Como contratar nossos serviços?"  subTitle="Siga os passos abaixo"/>
            <Grid container spacing={isDownMd ? 0 : 2} style={{ margin: 0, width: "100%" }}>
                {data.map((data, key) => (
                    <Grid
                        item
                        key={key}
                        style={{ margin: 0, paddingTop: "16px" }}
                        xs={12}
                        sm={12}
                        md={6}
                        lg={4}
                        xl={4}
                    >
                        <CardContact descBg={data.descBg} descSubTitle={data.descSubTitle} desctitle={data.desctitle}/>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}