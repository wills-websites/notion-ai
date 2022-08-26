import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";
import {graphql, Link} from "gatsby";
import PrismicRichText from "../atoms/PrismicRichText";
import Container from "../atoms/Container";
import {GatsbyImage} from "gatsby-plugin-image";

const Holder = styled.div`
  > :nth-child(even) {
    flex-direction: row-reverse;
  }
`

const Grid = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  column-gap: 4rem;
  margin-bottom: 4rem;
  justify-content: center;
  align-items: center;

  > :first-child {
    align-items: flex-start;
    padding: 1rem;
  }

  > :last-child {
    background-color: ${props => props.theme.colours.black};
    border-radius: 3rem;
  }
`

const Group = styled.div`
  width: 50%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

function SliceGraphicBlock({slice}) {

    return (
        <Container>
            <Holder>
                {slice.items.map((item, i) => (
                    <Grid key={i}>
                        <Group>
                            <PrismicRichText render={item.heading.richText}/>
                            <Link to="/">
                                <button className="button neutral" aria-label="button">{item.cta.text}</button>
                            </Link>
                        </Group>
                        <Group>
                            <GatsbyImage alt={item.graphic.alt || "Graphic"} image={item.graphic.gatsbyImageData}/>
                        </Group>
                    </Grid>))}
            </Holder>
        </Container>
    )
}

SliceGraphicBlock.propTypes = {
    slice: PropTypes.object.isRequired,
};

export default SliceGraphicBlock;

export const query = graphql`
    fragment GraphicBlock on PrismicPageDataBodyGraphicBlock {
        id
        items {
            heading {
                richText
            }
            cta {
                text
            }
            graphic {
                gatsbyImageData
                alt
            }
        }
        slice_type
    }
`