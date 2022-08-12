import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";
import {graphql, Link} from "gatsby";
import PrismicRichText from "../atoms/PrismicRichText";
import Container from "../atoms/Container";
import {GatsbyImage} from "gatsby-plugin-image";

const Holder = styled.div`
  padding: 10rem 0;
`
const TopicsHolder = styled.div`
    .item {
    display: inline-block;

    > * {
      vertical-align: -10%;
    }
}
`

function SliceTopicList({slice}) {
    const {
        title, catchphrase, button
    } = slice.primary;


    return (
        <Container>
            <Holder>
                <PrismicRichText render={title.richText}/>
                <h1>{catchphrase.text}</h1>
                <TopicsHolder>
                    {slice.items.map((loop, i) => (
                        <span key={i} className="item">
                                <>&nbsp;<GatsbyImage style={{maxHeight: '1rem', maxWidth: '1rem'}}
                                                     imgStyle={{objectFit: 'contain'}}
                                                     image={loop.image.gatsbyImageData}
                                                     alt="Logo"/>&nbsp;
                                    {loop.topic.text}
                                </>
                            </span>
                    ))}
                </TopicsHolder>
                <Link to="/">
                    <button aria-label="button"><PrismicRichText render={button.richText}/></button>
                </Link>
            </Holder>
        </Container>
    )
}

SliceTopicList.propTypes = {
    slice: PropTypes.object.isRequired,
};

export default SliceTopicList;

export const query = graphql`
    fragment TopicList on PrismicPageDataBodyTopicList {
        id
        primary {
            title {
                richText
            }
            catchphrase {
                text
            }
            button {
                richText
            }
        }
        items {
            topic {
                text
            }
            image {
                gatsbyImageData
                alt
            }
        }
        slice_type
    }
`