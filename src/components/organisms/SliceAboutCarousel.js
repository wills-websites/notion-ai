import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";
import {graphql} from "gatsby";
import PrismicRichText from "../atoms/PrismicRichText";
import {Splide, SplideSlide, SplideTrack} from '@splidejs/react-splide'
// import {AutoScroll} from "@splidejs/splide-extension-auto-scroll";
import Container from "../atoms/Container";

const Holder = styled.div`

  > :first-child {
    margin-top: 6rem;
  }

  > :nth-child(even) {
    flex-direction: row-reverse;
  }
`

const Group = styled.div`
  position: relative;
`

const SlideHolder = styled.div`
  border-radius: 1rem;
  height: inherit;
  width: 100%;
  padding: 2rem;

  > div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`

function SliceAboutCarousel({slice}) {
    const {heading, theme1} = slice.primary;
    const options = {
        type: 'loop',
        gap: '1rem',
        autoplay: true,
        resetProgress: false,
        perPage: 3,
        height: '50vh',
        pagination: false,
        arrows: false,
    }
    return (
        <div className={theme1 === true ? 'dark-theme' : ''}>
            <Container>
                <Holder>
                    <PrismicRichText render={heading.richText}/>
                    <Splide
                        options={options}
                        aria-labelledby="autoplay-carousel"
                        hasTrack={false}
                    >
                        <Group>
                            <SplideTrack>
                                {slice.items.map((slide, i) => (
                                    <SplideSlide key={i}>
                                        <SlideHolder className="transparent">
                                            <div>
                                                <PrismicRichText render={slide.description.richText}/>
                                            </div>
                                        </SlideHolder>
                                    </SplideSlide>
                                ))}
                            </SplideTrack>
                        </Group>
                    </Splide>
                </Holder>
            </Container>
        </div>
    )
}

SliceAboutCarousel.propTypes = {
    slice: PropTypes.object.isRequired,
};

export default SliceAboutCarousel;

export const query = graphql`
    fragment AboutCarousel on PrismicAboutDataBodyBusinessCarousel {
        id
        primary {
            heading {
                richText
            }
            theme1
        }
        items {
            description {
                richText
            }
            logo {
                gatsbyImageData
                alt
            }
        }
        slice_type
    }
`