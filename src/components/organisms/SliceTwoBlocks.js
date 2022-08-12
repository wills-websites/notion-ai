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

const Block = styled.div`
  position: relative;
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 1rem;
  background-color: pink;
  padding: 2rem;

  > :first-child {
    margin-top: 0;
  }

  > :last-child {
    margin-bottom: 0;
  }
`;

const Inner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 0.5rem;
`

function SliceTwoBlocks({slice}) {
    const {
        heading,
        block_1_title,
        block_1_description,
        block_1_cta,
        block_2_title,
        block_2_description,
        block_2_cta
    } = slice.primary;

    return (
        <Holder>
            <Container>
                <Grid>
                    <PrismicRichText render={heading.richText}/>
                    <Inner>
                        <Block>
                            <div>
                                <h4>{block_1_title.text}</h4>
                                <PrismicRichText render={block_1_description.richText}/>
                            </div>
                            <Link to="/">
                                <button aria-label="button" className="button fill"><PrismicRichText
                                    render={block_1_cta.richText}/>
                                </button>
                            </Link>
                        </Block>
                        <Block>
                            <div>
                                <h4>{block_2_title.text}</h4>
                                <PrismicRichText render={block_2_description.richText}/>
                            </div>
                            <Link to="/">
                                <button aria-label="button" className="button fill"><PrismicRichText
                                    render={block_2_cta.richText}/>
                                </button>
                            </Link>
                        </Block>
                    </Inner>
                </Grid>
            </Container>
        </Holder>
    )
}

SliceTwoBlocks.propTypes = {
    slice: PropTypes.object.isRequired,
};

export default SliceTwoBlocks;

export const query = graphql`
    fragment TwoBlocks on PrismicPageDataBodyTwoBlocks {
        id
        primary {
            heading {
                richText
            }
            block_1_title {
                text
            }
            block_1_description {
                richText
            }
            block_1_cta {
                richText
            }
            block_2_title {
                text
            }
            block_2_description {
                richText
            }
            block_2_cta {
                richText
            }
        }
        slice_type
    }
`