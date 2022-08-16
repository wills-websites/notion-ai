import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";
import {graphql, Link} from "gatsby";
import PrismicRichText from "../atoms/PrismicRichText";
import Container from "../atoms/Container";

const Holder = styled.div`
`

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  > :first-child {
    margin-top: 0;
  }
`

const Inner = styled.div`
  display: flex;
  height: 60vh;
  justify-content: center;
  align-items: center;
  column-gap: 0.5rem;
  padding-bottom: 1rem;
`

const Block = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 1rem;
  padding: 2rem;

  > :first-child {
    margin-top: 0;
  }

  > :last-child {
    margin-bottom: 0;
  }
`;

function SliceResponsiveBlocks({slice}) {
    const {heading} = slice.primary;

    return (
        <Holder>
            <Container>
                <Grid>
                    {heading.richText && <PrismicRichText render={heading.richText}/>}
                    <Inner>
                        {slice.items.map((item, i) => (
                            <Block className={item.theme} key={i}>
                                <div>
                                    <h4>{item.block_title.text}</h4>
                                    <PrismicRichText render={item.block_description.richText}/>
                                </div>
                                <Link to="/">
                                    <button aria-label="button" className="button"><PrismicRichText
                                        render={item.block_cta.richText}/>
                                    </button>
                                </Link>
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
                richText
            }
            block_image {
                gatsbyImageData
                alt
            }
        }
        slice_type
    }
`