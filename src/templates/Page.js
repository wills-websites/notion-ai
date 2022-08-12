import React from "react"
import {graphql} from "gatsby";
import Seo from "../components/molecules/Seo";
import SlicePicker from "../components/organisms/SlicePicker";

function Page({data}) {
    const {title, body} = data.prismicPage.data

    return (
        <>
            <Seo title={title.text}/>
            {body.map(slice => <SlicePicker key={slice.id} slice={slice}/>)}
        </>
    )
};

export const pageQuery = graphql`
    query($id: String!) {
        prismicPage(id: {eq: $id}) {
            uid
            data {
                title {
                    text
                }
                body {
                    ... on PrismicPageDataBodyTwoBlocks { ...TwoBlocks }
                    ... on PrismicPageDataBodyThreeBlocks { ...ThreeBlocks }
                    ... on PrismicPageDataBodyCta { ...CTA }
                    ... on PrismicPageDataBodyTopicList { ...TopicList }
                }
            }
        }
    }
`

export default Page


