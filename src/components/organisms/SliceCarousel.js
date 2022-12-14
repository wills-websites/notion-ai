import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";
import {graphql} from "gatsby";
import PrismicRichText from "../atoms/PrismicRichText";
import {Splide, SplideSlide, SplideTrack} from '@splidejs/react-splide'
// import {AutoScroll} from "@splidejs/splide-extension-auto-scroll";
import Container from "../atoms/Container";

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Holder = styled.div`

  > :first-child {
    margin-top: 6rem;
    margin-bottom: 3rem;
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

function SliceCarousel({slice}) {
    const {heading} = slice.primary;
    const options = {
        type: 'loop',
        gap: '1rem',
        autoplay: true,
        resetProgress: false,
        perPage: 3,
        height: '50vh',
        pagination: false,
        arrows: false,
        breakpoints: {
            768: {
                perPage: 1,
            },
        }
    }
    return (
        <Wrapper>
            <div>
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
                                            <SlideHolder className="white">
                                                <div>
                                                    <PrismicRichText render={slide.block_title.richText}/>
                                                    <PrismicRichText render={slide.block_description.richText}/>
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
        </Wrapper>
    )
}

SliceCarousel.propTypes = {
    slice: PropTypes.object.isRequired,
};

export default SliceCarousel;

export const query = graphql`
    fragment BlockCarousel on PrismicPageDataBodyBlockCarousel {
        id
        primary {
            heading {
                richText
            }
        }
        items {
            block_title {
                richText
            }
            block_description {
                richText
            }
            block_image {
                alt
                gatsbyImageData
            }
        }
        slice_type
    }
`