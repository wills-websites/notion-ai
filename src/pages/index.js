import React from "react";
import Seo from "../components/molecules/Seo";
import {graphql} from "gatsby";
import SlicePicker from "../components/organisms/SlicePicker";

function IndexPage({data}) {
    const {body} = data.prismicPage.data
    return (
        <>
            <Seo title="Home"/>
            {body.map(slice => <SlicePicker key={slice.id} slice={slice}/>)}
        </>
    )
};

export default IndexPage;

export const homePageQuery = graphql`
    query {
        prismicPage(uid: {eq: "home"}) {
            data {
                body {
                    ... on PrismicPageDataBodyTwoBlocks { ...TwoBlocks }
                    ... on PrismicPageDataBodyCta { ...CTA }
                    ... on PrismicPageDataBodyTopicList { ...TopicList }
                }
            }
        }
    }
`