import React from "react";
import { Routes, Route } from "react-router-dom";
import FormAbout from "../components/Form/FormAbout";
import FormPrincipal from "../components/Form/FormPrincipal";
import FormServices from "../components/Form/FormServices";
import NotFoundPage from "../components/Form/NotFoundPage";

export default function MyRoutes() {
    return (
        <Routes>
            <Route index element={<FormPrincipal />} />
            <Route path="/servicos" element={<FormServices />} />
            <Route path="/sobre" element={<FormAbout />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
}