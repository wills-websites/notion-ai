import React from "react"
import {useStaticQuery, graphql} from "gatsby";
import styled from "styled-components";
import {GatsbyImage} from "gatsby-plugin-image";
import {Link} from "gatsby";

const Holder = styled.div`
  background-color: ${props => props.theme.colours.black};
  color: ${props => props.theme.colours.white};
`

const Inner = styled.div`
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  max-width: ${(props) => props.theme.typography.maxScreen}px;
  margin: 0 auto;
  height: min-content;
`

const Clients = styled.div`
  line-height: 1.75rem;

  .item {
    display: inline-block;

    > * {
      vertical-align: -10%;
    }
  }

  .item:not(:last-child)::after {
    content: ','
  }

  .item:last-child::after {
    content: '.';
  }
`

const ContentHolder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`

const ButtonHolder = styled.div`
  display: flex;
  height: min-content;
  column-gap: 1rem;
`

function Footer() {
    const data = useStaticQuery(graphql`
      query footerQuery {
          prismicFooter {
              data {
                clients {
                  client {
                    richText
                    text
                  }
                  logo {
                    gatsbyImageData
                    alt
                  }
                }
              }
          }
        }
    `)
    return (
        <Holder>
            <Inner>
                <Clients>
                    <span>Our platforms have been trusted by</span>
                    {data.prismicFooter.data.clients.map((loop, i) => (
                        <span key={i} className="item">
                                <>&nbsp;<GatsbyImage style={{maxHeight: '1rem', maxWidth: '1rem'}}
                                                     imgStyle={{objectFit: 'contain'}}
                                                     image={loop.logo.gatsbyImageData}
                                                     alt="Logo"/>&nbsp;
                                    {loop.client.text}
                                </>
                            </span>
                    ))}
                </Clients>
                <ContentHolder>
                    <ButtonHolder>
                        <Link to="/">
                            <button className="button dark">NotionAi</button>
                        </Link>
                        <button className="button indigo">Start your free trial today</button>
                    </ButtonHolder>
                    <div><p>Location</p>
                        <p>Bay 7, Sydney Harbour Bridge Warehouses,<br/> Middlemiss Street, Lavender Bay NSW
                            2060<br/>
                            Australia</p>
                        <ButtonHolder>
                            <button className="button dark">Email</button>
                            <button className="button dark">LinkedIn</button>
                            <button className="button dark">Instagram</button>
                        </ButtonHolder>
                    </div>
                </ContentHolder>
            </Inner>
        </Holder>
    )
}

export default Footer
