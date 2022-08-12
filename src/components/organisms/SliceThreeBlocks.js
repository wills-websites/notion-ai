import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";
import {graphql, Link} from "gatsby";
import PrismicRichText from "../atoms/PrismicRichText";
import Container from "../atoms/Container";

const Block = styled.div`
  position: relative;
  width: 100%;
  height: 50vh;
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

function SliceThreeBlocks({slice}) {
    const {
        heading,
        block_1_title,
        block_1_description,
        block_1_cta,
        block_2_title,
        block_2_description,
        block_2_cta,
        block_3_title,
        block_3_description,
        block_3_cta
    } = slice.primary;

    return (
        <Container>
            <PrismicRichText render={heading.richText}/>
            <Inner>
                <Block>
                    <div>
                        <p>{block_1_title.text}</p>
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
                        <p>{block_2_title.text}</p>
                        <PrismicRichText render={block_2_description.richText}/>
                    </div>
                    <Link to="/">
                        <button aria-label="button" className="button link"><PrismicRichText
                            render={block_2_cta.richText}/>
                        </button>
                    </Link>
                </Block>
                <Block>
                    <div>
                        <p>{block_3_title.text}</p>
                        <PrismicRichText render={block_3_description.richText}/>
                    </div>
                    <Link to="/">
                        <button aria-label="button" className="button link"><PrismicRichText
                            render={block_3_cta.richText}/>
                        </button>
                    </Link>
                </Block>
            </Inner>
        </Container>
    )
}

SliceThreeBlocks.propTypes = {
    slice: PropTypes.object.isRequired,
};

export default SliceThreeBlocks;

export const query = graphql`
    fragment ThreeBlocks on PrismicPageDataBodyThreeBlocks {
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
            block_3_title {
                text
            }
            block_3_description {
                richText
            }
            block_3_cta {
                richText
            }
        }
        slice_type
    }
`