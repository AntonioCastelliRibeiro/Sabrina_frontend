import React from "react";
import { Routes, Route } from "react-router-dom";
import FormAbout from "../components/Form/FormAbout";
import FormAvaliable from "../components/Form/FormAvailable";
import FormPrincipal from "../components/Form/FormPrincipal";
import NotFoundPage from "../components/Form/NotFoundPage";
import MyModal from "../components/MyModal";
import { IMAGES as IMAGESINDEX } from "../components/Form/FormPrincipal/data";
import { IMAGES as IMAGESAVALIABLE } from "../components/Form/FormAvailable/data";

export default function MyRoutes() {
    return (
        <>
            <Routes >

                <Route path="/" element={<FormPrincipal />} >
                    <Route index element={<FormPrincipal />} />
                    <Route path="/index/img/:id" element={<MyModal data={IMAGESINDEX} pathname="/" />} />
                </Route>

                <Route path="/disponiveis" element={<FormAvaliable />} >
                    <Route index element={<FormAvaliable />} />
                    <Route path="/disponiveis/img/:id" element={<MyModal data={IMAGESAVALIABLE} pathname="/disponiveis" />} />
                </Route>

                <Route path="/seguidores" element={<FormPrincipal />} />
                <Route path="/comentarios" element={<FormPrincipal />} />
                <Route path="/curtidas" element={<FormPrincipal />} />

                <Route path="/sobre" element={<FormAbout />} />
                <Route path="*" element={<NotFoundPage />} />

            </Routes>

            <Routes>
                <Route path="/" element={<div />} />
                <Route path="/disponiveis" element={<div />} />
                <Route path="/sobre" element={<div />} />
                <Route path="/disponiveis/img/:id" element={<div />} />

                <Route path="/index/img/:id" element={<MyModal data={IMAGESINDEX} pathname="/" />} />
            </Routes>

            <Routes>
                <Route path="/" element={<div />} />
                <Route path="/disponiveis" element={<div />} />
                <Route path="/sobre" element={<div />} />
                <Route path="/index/img/:id" element={<div />} />

                <Route path="/disponiveis/img/:id" element={<MyModal data={IMAGESAVALIABLE} pathname="/disponiveis" />} />
            </Routes>
        </>
    )
}