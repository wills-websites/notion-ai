import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";
import {graphql} from "gatsby";
import PrismicRichText from "../atoms/PrismicRichText";
import Container from "../atoms/Container";

const Holder = styled.div`
  min-height: 100vh;
  width: 100%;
`

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  > :first-child {
    margin-top: 6rem;
  }
`

const Block = styled.div`
  width: 100%;
  height: 60vh;
  background-color: rgba(150, 150, 150, 0.25);
  display: flex;
  padding: 2rem;
  border-radius: 1rem;
`

const Group = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Price = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

function SlicePlanType({slice}) {
    const {
        heading, theme1
    } = slice.primary;

    return (
        <Holder className={theme1 === true ? 'dark-theme' : ''}>
            <Container>
                <Inner>
                    <PrismicRichText render={heading.richText}/>
                    {slice.items.map((item, i) => (
                        <Block key={i}>
                            <Group>
                                <div>
                                    <PrismicRichText render={item.subheading.richText}/>
                                    <PrismicRichText render={item.catchline.richText}/>
                                </div>
                                <button rel="noreferrer" className="button light"><PrismicRichText
                                    render={item.cta.richText}/></button>
                            </Group>
                            <Group>
                                <PrismicRichText render={item.content.richText}/>
                                <Price><h2>USD {item.price}</h2><p>/ monthly</p></Price>
                            </Group>
                        </Block>
                    ))}
                </Inner>
            </Container>
        </Holder>
    )
}

SlicePlanType.propTypes = {
    slice: PropTypes.object.isRequired,
};

export default SlicePlanType;

export const query = graphql`
    fragment PlanType on PrismicPageDataBodyPlanType {
        id
        primary {
            theme1
            heading {
                richText
            }
        }
        items {
            subheading {
                richText
            }
            catchline {
                richText
            }
            cta {
                richText
            }
            content {
                richText
            }
            price
        }
        slice_type
    }
`