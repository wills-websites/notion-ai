import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";
import {graphql} from "gatsby";
import PrismicRichText from "../atoms/PrismicRichText";
import Container from "../atoms/Container";

const Block = styled.div`
  position: relative;
  width: 100%;
  border-radius: 1rem;
  background-color: pink;
  padding: 2rem;

  p:nth-child(2) {
    margin-bottom: 10rem;
  }

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
  column-gap: 2rem;
`

function SliceTwoBlocks({slice}) {
    const {
        title,
        block_1_title,
        block_1_description,
        block_1_cta,
        block_2_title,
        block_2_description,
        block_2_cta
    } = slice.primary;

    return (
        <Container>
            <h1>{title.text}</h1>
            <Inner>
                <Block>
                    <p>{block_1_title.text}</p>
                    <PrismicRichText render={block_1_description.richText}/>
                    <button><PrismicRichText render={block_1_cta.richText}/></button>
                </Block>
                <Block>
                    <p>{block_2_title.text}</p>
                    <PrismicRichText render={block_2_description.richText}/>
                    <button><PrismicRichText render={block_2_cta.richText}/></button>
                </Block>
            </Inner>
        </Container>
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
            title {
                text
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