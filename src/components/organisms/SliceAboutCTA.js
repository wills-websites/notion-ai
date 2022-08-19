import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";
import {graphql, Link} from "gatsby";
import PrismicRichText from "../atoms/PrismicRichText";
import Container from "../atoms/Container";

const Holder = styled.div`
  height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

function SliceAboutCTA({slice}) {
    const {
        text, button
    } = slice.primary;

    return (
        <Container>
            <Holder>
                <PrismicRichText render={text.richText}/>
                <Link to="/">
                    <button className="button neutral" aria-label="button"><PrismicRichText render={button.richText}/>
                    </button>
                </Link>
            </Holder>
        </Container>
    )
}

SliceAboutCTA.propTypes = {
    slice: PropTypes.object.isRequired,
};

export default SliceAboutCTA;

export const query = graphql`
    fragment AboutCTA on PrismicAboutDataBodyCta {
        id
        primary {
            text {
                richText
            }
            button {
                richText
            }
        }
        slice_type
    }
`