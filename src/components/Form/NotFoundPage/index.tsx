import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Content } from "./styles";

export default function NotFoundPage() {
    const navigate = useNavigate();

    useEffect(()=>{
        navigate("/");
    }, []);

    return (
        <Content>
            <Typography variant="h3">
                Página não encontrada
            </Typography>
        </Content>
    )
}