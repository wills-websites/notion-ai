import React from "react";
import styled from "styled-components";
import PrismicRichText from "../atoms/PrismicRichText";
import {GatsbyImage} from "gatsby-plugin-image";

const Holder = styled.div`
  padding: 6rem 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1rem;
`;

const Inner = styled.div`
  position: relative;
  height: 50vh;
  background: rgb(214, 214, 214);
  background: linear-gradient(180deg, rgba(214, 214, 214, 0.36458333333333337) 62%, rgba(96, 38, 245, 1) 100%);
  border-radius: 1rem;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 1rem;
`

const ImageHolder = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

function TeamMembers({mappedItem, team_heading}) {
    return (
        <Holder>
            <PrismicRichText render={team_heading.richText}/>
            <Grid>
                {mappedItem.map((item, i) => (
                    <Inner key={i}>
                        <Content>
                            <div>
                                <PrismicRichText render={item.name.richText}/>
                                <PrismicRichText render={item.role.richText}/>
                            </div>
                            <a href={item.linkedin.url}>
                                <button className="button neutral"> LinkedIn</button>
                            </a>
                        </Content>

                        <ImageHolder>
                            <GatsbyImage alt={item.photo.alt}
                                         image={item.photo.gatsbyImageData}/>
                        </ImageHolder>
                    </Inner>
                ))}
            </Grid>
        </Holder>
    );
}

TeamMembers.propTypes = {};

export default TeamMembers;