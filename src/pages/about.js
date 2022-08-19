import React from "react";
import Seo from "../components/molecules/Seo";
import styled from "styled-components";
import {graphql} from "gatsby";
import SliceAboutCarousel from "../components/organisms/SliceAboutCarousel";
import SliceAboutCTA from "../components/organisms/SliceAboutCTA";
import PrismicRichText from "../components/atoms/PrismicRichText";
import Container from "../components/atoms/Container";
import OffsetTwoColumn from "../components/molecules/OffsetTwoColumn";
import TeamMembers from "../components/molecules/TeamMembers";

const Holder = styled.div`
`;

const Spacer = styled.div`
  height: 15vh;
  width: 100%;
`
const AboutPage = ({slice, pageTitle, data}) => {
    const {title, heading, description, team, team_heading} = data.prismicAbout.data
    return (
        <Holder>
            <Seo title={title.text}/>
            <Spacer/>
            <Container>
                <PrismicRichText render={heading.richText}/>
                <OffsetTwoColumn mappedItem={description}/>
                <TeamMembers mappedItem={team} team_heading={team_heading}/>
            </Container>
        </Holder>
    );
}

export default AboutPage;


export const pageQuery = graphql`
query AboutQuery {
  prismicAbout {
    data {
      title {
        text
      }
      heading {
        richText
      }
      description {
        description1 {
          richText
        }
        subheading {
          richText
        }
      }
      video {
        uid
        url
        slug
      }
      team_heading {
        richText
      }
      team {
        about_me {
          richText
        }
        linkedin {
          url
        }
        name {
          text
          richText
        }
        photo {
          gatsbyImageData
          alt
        }
        role {
          text
          richText
        }
      }
      body {
        ... on PrismicAboutDataBodyCta { ...AboutCTA }
        ... on PrismicAboutDataBodyBusinessCarousel { ...AboutCarousel }
      } 
    }
  }
}
`

