import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";
import {graphql} from "gatsby";
import PrismicRichText from "../atoms/PrismicRichText";
import Container from "../atoms/Container";

const Holder = styled.div`
  background-color: ${props => props.theme.colours.lightgrey};
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 1.5rem 0;
`

const Group = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 4rem;
`

function SliceTwoColumns({slice}) {
    const {heading} = slice.primary;

    return (
        <Holder>
            <Container>
                <Grid>
                    <PrismicRichText render={heading.richText}/>
                    <div>
                        {slice.items.map((item, i) => (
                            <Group key={i}>
                                <p><b>{item.number}</b></p>
                                <div>
                                    <b><PrismicRichText render={item.subheading.richText}/></b>
                                    <PrismicRichText render={item.description.richText}/>
                                </div>
                            </Group>
                        ))}
                    </div>
                </Grid>
            </Container>
        </Holder>
    )
}

SliceTwoColumns.propTypes = {
    slice: PropTypes.object.isRequired,
};

export default SliceTwoColumns;

export const query = graphql`
    fragment TwoColumns on PrismicPageDataBodyTwoColumns {
        id
        primary {
            heading {
                richText
            }
        }
        items {
            description {
              richText
            }
            subheading {
              richText
            }
            number
          }
        slice_type
    }
`