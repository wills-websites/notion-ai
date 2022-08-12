import React from "react"
import {graphql} from "gatsby";
import Seo from "../components/molecules/Seo";
import SlicePicker from "../components/organisms/SlicePicker";
import styled from 'styled-components'
import Container from "../components/atoms/Container";
import PrismicRichText from "../components/atoms/PrismicRichText";

const Spacer = styled.div`
  height: 15vh;
  width: 100%;
`

function Page({data}) {
    const {title, body} = data.prismicPage.data

    return (
        <>
            <Seo title={title.text}/>
            <Spacer/>
            <Container>{title.richText && <PrismicRichText render={title.richText}/>}</Container>
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
                    richText
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


