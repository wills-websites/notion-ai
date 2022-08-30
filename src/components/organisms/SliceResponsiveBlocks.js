import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";
import {graphql, Link} from "gatsby";
import PrismicRichText from "../atoms/PrismicRichText";
import Container from "../atoms/Container";
import {GatsbyImage} from "gatsby-plugin-image";

const Holder = styled.div`
  min-height: 100vh;
  width: 100%;
`

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: inherit;
  width: inherit;

  > :first-child {
    margin-bottom: 3rem;
  }
`

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  row-gap: 1rem;
  min-width: calc(33% - 0.5rem);
  padding-bottom: 1rem;
  @media (${(props) => props.theme.breakpoints.md}) {
    flex-direction: row;
    height: 65vh;
    column-gap: 1rem;
  }
`

const Block = styled.div` {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 1rem;
  padding: 1rem;
  position: relative;

  * {
    z-index: 2;
  }

  > div > :first-child {
    margin-top: 0;
  }

  > :last-child {
    margin-bottom: 0;
  }
}
`;

const MediaWrapper = styled.div`
  position: absolute;
  border-radius: 1rem;
  padding: 1rem;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin: 0;
  }
`


function SliceResponsiveBlocks({slice}) {
    const {heading} = slice.primary;

    return (
        <Holder className={slice.primary.theme === true ? 'dark-theme' : ''}>
            <Container>
                <Grid>
                    {heading.richText && <PrismicRichText render={heading.richText}/>}
                    <Inner>
                        {slice.items.map((item, i) => (
                            <Block className={item.theme} key={i}>
                                <div>
                                    {item.block_title.text && <p>{item.block_title.text}</p>}
                                    <PrismicRichText render={item.block_description.richText}/>
                                </div>
                                {item.block_cta.text &&
                                    <Link to="/">
                                        <button aria-label="button" className="button">{item.block_cta.text}</button>
                                    </Link>}

                                <MediaWrapper>
                                    {item.video.url &&
                                        <video
                                            autoPlay
                                            muted
                                            loop
                                            playsInline>
                                            <source src={item.video.url} type="video/mp4"/>
                                            Your browser does not support the video tag.
                                        </video>}
                                    {item.block_image.gatsbyImageData &&
                                        <GatsbyImage alt={item.block_image.alt}
                                                     image={item.block_image.gatsbyImageData}/>
                                    }
                                </MediaWrapper>

                            </Block>))}
                    </Inner>
                </Grid>
            </Container>
        </Holder>
    )
}

SliceResponsiveBlocks.propTypes = {
    slice: PropTypes.object.isRequired,
};

export default SliceResponsiveBlocks;

export const query = graphql`
    fragment ResponsiveBlocks on PrismicPageDataBodyResponsiveBlocks {
        id
        primary {
            theme
            heading {
                richText
            }
        }
        items {
            theme
            block_title {
                text
            }
            block_description {
                richText
            }
            block_cta {
                text
            }
            block_image {
                gatsbyImageData
                alt
            }
            video {
                url
            }
        }
        slice_type
    }
`