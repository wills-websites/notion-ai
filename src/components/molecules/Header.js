import React, {useState} from "react";
import styled from "styled-components";
import Navigation from "./Navigation";
import {Link} from "gatsby";
import PropTypes from 'prop-types';
import classNames from "classnames";
import Container from "../atoms/Container";
// import HeaderScrollTransition from "../atoms/HeaderScrollTransition";

const Holder = styled.div`
  width: 100%;
  position: fixed;
  z-index: 400;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0 1rem 0;
  @media ( ${props => props.theme.breakpoints.md} ) {
    padding: 1.5rem 0 1rem 0;
    grid-template-columns: 1fr 3fr;
  }

  .logo-holder {
    background-color: rgba(80, 80, 80, 0.2);
    width: min-content;
    border-radius: 2rem;
    padding: 0.5rem 2rem;
    backdrop-filter: blur(5px);

    a, p {
      text-decoration: none;
      margin: 0;
      color: white;
      ${(props) => props.theme.fluidType(1)};
      @media ( ${props => props.theme.breakpoints.md} ) {
        ${(props) => props.theme.fluidType(-1)};
      }
    }

    svg {
      height: 1.4rem;
      width: auto;
      display: block;
      margin-top: 0.2rem;
      @media ( ${props => props.theme.breakpoints.md} ) {
        margin: 0;
        height: 1.8rem;
      }

      path, rect {
        fill: ${props => props.navOpen ? props.theme.colours.black : props.theme.colours.white};
      }
    }
  }
`;

const LargeNavHolder = styled.div`
  display: none;
  @media ( ${props => props.theme.breakpoints.md} ) {
    display: block;
  }
`;


function Header() {
    const [navOpen, setNavOpen] = useState(false);
    let gridClasses = classNames({
        'header-grid': true,
        'nav-open': navOpen,

    });
    return (
        <Holder>
            <Container>
                <Grid className={gridClasses} navOpen={navOpen}>
                    <div className="logo-holder">
                        <Link to="/">
                            <p>NotionAi</p>
                        </Link>
                    </div>
                    <LargeNavHolder>
                        <Navigation/>
                    </LargeNavHolder>
                </Grid>
            </Container>
        </Holder>
    );
}

Header.propTypes = {
    dark: PropTypes.bool,
    showAnnouncement: PropTypes.bool,
    inverseAnnouncement: PropTypes.bool,
};
export default Header;