import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";
import {graphql} from "gatsby";
import PrismicRichText from "../atoms/PrismicRichText";
import {Splide, SplideSlide, SplideTrack} from '@splidejs/react-splide'
// import {AutoScroll} from "@splidejs/splide-extension-auto-scroll";
import Container from "../atoms/Container";
import FlipAnimation from "./FlipAnimation";

const Holder = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Inner = styled.div`
  > :first-child {
    margin-top: 6rem;
    margin-bottom: 4rem;
  }

  > :nth-child(even) {
    flex-direction: row-reverse;
  }
`

const Group = styled.div`
  position: relative;
`

const SlideHolder = styled.div`
`

function SliceFlipCarousel({slice}) {
    const {heading, theme1} = slice.primary;
    const options = {
        type: 'loop',
        gap: '1rem',
        autoplay: true,
        interval: 2000,
        resetProgress: false,
        perPage: 3,
        height: '50vh',
        pagination: false,
        drag: false,
        arrows: false,
        breakpoints: {
            768: {
                perPage: 1,
            },
        }
    }
    return (
        <Holder className={theme1 === true ? 'dark-theme' : ''}>
            <div>
                <Container>
                    <Inner>
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
                                            <FlipAnimation front={slide.logo.gatsbyImageData}
                                                           back={slide.description.richText}/>
                                        </SplideSlide>
                                    ))}
                                </SplideTrack>
                            </Group>
                        </Splide>
                    </Inner>
                </Container>
            </div>
        </Holder>
    )
}

SliceFlipCarousel.propTypes = {
    slice: PropTypes.object.isRequired,
};

export default SliceFlipCarousel;

export const query = graphql`
    fragment FlipCarousel on PrismicPageDataBodyBusinessCarousel {
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