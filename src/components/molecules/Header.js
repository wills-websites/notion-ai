import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";
import {Link} from "gatsby";
import Container from "../atoms/Container";
import Logo from '../../assets/svg/logo-black.inline.svg'
import HeaderScrollTransition from "../atoms/HeaderScrollTransition";

const Holder = styled.div`
  width: 100%;
  position: fixed;
  z-index: 400;
`;

const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 0;

  .logo-holder {
    display: flex;
    column-gap: 1rem;

    a {
      width: available;
      background-color: ${props => props.theme.colours.lightgrey};
      color: ${props => props.theme.textColour};
      border-radius: 5rem;
      padding: 0.5rem 2rem;
      backdrop-filter: blur(5px);
      text-decoration: none;

      svg {
        height: 1.2rem;
        width: auto;
        display: block;
        margin-top: 0.2rem;

        path {
          fill: ${props => props.theme.textColour};
        }

        @media ( ${props => props.theme.breakpoints.md} ) {
          margin: 0;
        }
      }
    }


  }
`;

const Banner = styled.div`
  height: auto;
  width: 100%;
  background-color: rgba(150, 150, 150, 0.25);
  padding: 0.3rem 0;
  text-align: center;
  color: ${props => props.theme.textColour};
`

function Header() {
    return (
        <Holder>
            <Container>
                <HeaderScrollTransition><Banner>Get early access to the next generation of AI-augmented executive
                    intelligence products. <Link to="/">Join the Lab</Link></Banner></HeaderScrollTransition>
                <Grid>
                    <div className="logo-holder">
                        <Link to="/">
                            <Logo/>
                        </Link>
                        <Link to="/">
                            Start your free trial
                        </Link>
                    </div>
                    <Navigation/>
                </Grid>
            </Container>
        </Holder>
    );
}

export default Header;