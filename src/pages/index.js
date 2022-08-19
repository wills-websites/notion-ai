import React from "react";
import Seo from "../components/molecules/Seo";
import {graphql} from "gatsby";
import SlicePicker from "../components/organisms/SlicePicker";
import styled from 'styled-components'
import PrismicRichText from "../components/atoms/PrismicRichText";
import Container from "../components/atoms/Container";

const Holder = styled.div``

const Spacer = styled.div`
  height: 15vh;
  width: 100%;
`

function IndexPage({data}) {
    const {title, theme, body} = data.prismicPage.data
    return (
        <Holder className={theme === true ? 'dark-theme' : ''}>
            <Seo title={title.text}/>
            <Spacer/>
            {body.map(slice => <SlicePicker key={slice.id} slice={slice}/>)}
        </Holder>
    )
};

export default IndexPage;

export const homePageQuery = graphql`
    query {
        prismicPage(uid: {eq: "home"}) {
            data {
                title {
                    richText
                    text
                }
                theme
                body {
                    ... on PrismicPageDataBodyResponsiveBlocks { ...ResponsiveBlocks }
                    ... on PrismicPageDataBodyCta { ...CTA }
                    ... on PrismicPageDataBodyTopicList { ...TopicList }
                }
            }
        }
    }
`