import React from "react";
import Seo from "../components/molecules/Seo";
import {graphql} from "gatsby";
import SlicePicker from "../components/organisms/SlicePicker";
import styled from 'styled-components'

const Spacer = styled.div`
  height: 15vh;
  width: 100%;
`


function IndexPage({data}) {
    const {body} = data.prismicPage.data
    return (
        <>
            <Seo title="Home"/>
            <Spacer/>
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
                    ... on PrismicPageDataBodyThreeBlocks { ...ThreeBlocks }
                    ... on PrismicPageDataBodyCta { ...CTA }
                    ... on PrismicPageDataBodyTopicList { ...TopicList }
                }
            }
        }
    }
`