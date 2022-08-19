import React from "react"
import {graphql} from "gatsby";
import Seo from "../components/molecules/Seo";
import SlicePicker from "../components/organisms/SlicePicker";
import styled from 'styled-components'
import Container from "../components/atoms/Container";
import PrismicRichText from "../components/atoms/PrismicRichText";

const Holder = styled.div`
`

const Spacer = styled.div`
  height: 15vh;
  width: 100%;
`

function Page({data}) {
    const {title, theme, body} = data.prismicPage.data

    return (
        <Holder className={theme === true ? 'dark-theme' : ''}>
            <Seo title={title.text}/>
            <Spacer/>
            {body.map(slice => <SlicePicker key={slice.id} slice={slice}/>)}
        </Holder>
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
                theme
                body {
                    ... on PrismicPageDataBodyResponsiveBlocks { ...ResponsiveBlocks }
                    ... on PrismicPageDataBodyTwoColumns { ...TwoColumns }
                    ... on PrismicPageDataBodyCta { ...CTA }
                    ... on PrismicPageDataBodyTopicList { ...TopicList }
                    ... on PrismicPageDataBodyGraphicBlock { ...GraphicBlock }
                    ... on PrismicPageDataBodyBlockCarousel { ...BlockCarousel }
                    ... on PrismicPageDataBodyPlanType { ...PlanType }
                }
            }
        }
    }
`

export default Page


