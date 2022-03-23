import React from "react";
import MyImageMasonry from "../../../MyImageMasonry";

import IMAGES from "./data";

export default function SuspenseComp() {
    return <MyImageMasonry issuspense data={IMAGES} pathname="/index/img/" />
}