import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";
import {graphql, Link} from "gatsby";
import PrismicRichText from "../atoms/PrismicRichText";
import Container from "../atoms/Container";
import AccordionGroup from "../atoms/AccordionGroup";
import Accordion from "../atoms/Accordion";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
`

function SliceFAQ({slice}) {
    const {heading} = slice.primary;

    return (
        <Container>
            <Grid>
                <PrismicRichText render={heading.richText}/>
                <AccordionGroup>
                    {slice.items.map((item, i) => (
                        <Accordion title={item.question_title.text} key={i}><PrismicRichText
                            render={item.question_answer.richText}/></Accordion>
                    ))}
                </AccordionGroup>
            </Grid>
        </Container>
    )
}

SliceFAQ.propTypes = {
    slice: PropTypes.object.isRequired,
};

export default SliceFAQ;

export const query = graphql`
    fragment FAQ on PrismicPageDataBodyFaq {
        id
        primary {
            heading {
                richText
            }
        }
        items {
            question_title {
                richText
                text
            }
            question_answer {
                richText
            }
        }
        slice_type
    }
`