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
    margin-bottom: 4rem;
  }
`

const Block = styled.div`
  width: 100%;
  background-color: rgba(150, 150, 150, 0.25);
  display: flex;
  padding: 2rem;
  border-radius: 1rem;
`

const FirstGroup = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const SecondGroup = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;

  .extra-content {
    display: flex;
    align-items: center;
    column-gap: 1rem;

    button {
      height: min-content;
    }
  }
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
                            <FirstGroup>
                                <div>
                                    <PrismicRichText render={item.subheading.richText}/>
                                    <PrismicRichText render={item.catchline.richText}/>
                                </div>
                                <button rel="noreferrer" className="button light"><PrismicRichText
                                    render={item.cta.richText}/></button>
                            </FirstGroup>
                            <SecondGroup>
                                <PrismicRichText render={item.content.richText}/>
                                <div className="extra-content">
                                    {item.price && <Price><h2>USD {item.price}</h2><PrismicRichText
                                        render={item.rate.richText}/></Price>}
                                    {item.users &&
                                        <button rel="noreferrer" className="button neutral">{item.users} Users</button>}
                                    {item.topics &&
                                        <button rel="noreferrer"
                                                className="button neutral">{item.topics} Topics</button>
                                    }
                                </div>
                            </SecondGroup>
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
            topics
            users
            rate {
                richText
            }
        }
        slice_type
    }
`