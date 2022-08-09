import React from "react"
import Seo from "../components/molecules/Seo";
import SlicePicker from "../components/organisms/SlicePicker";

function Page({data}) {
    const {uid} = data.prismicPage;
    const {title, body} = data.prismicPage.data
    return (
        <>
            <Seo title={title.text} />
        </>
    )
}

export default Page


