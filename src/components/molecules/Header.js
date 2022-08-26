import React, {useState} from "react";
import styled from "styled-components";
import Navigation from "./Navigation";
import {Link} from "gatsby";
import PropTypes from 'prop-types';
import classNames from "classnames";
import Container from "../atoms/Container";
// import HeaderScrollTransition from "../atoms/HeaderScrollTransition";
import Logo from '../../assets/svg/logo.inline.svg'

const Holder = styled.div`
  width: 100%;
  position: fixed;
  z-index: 400;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 0 1rem 0;

  .logo-holder {
    background-color: ${props => props.theme.colours.lightgrey};
    width: min-content;
    border-radius: 5rem;
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
      height: 1.3rem;
      width: auto;
      display: block;
      margin-top: 0.2rem;
      @media ( ${props => props.theme.breakpoints.md} ) {
        margin: 0;
      }

      path, rect {
        fill: ${props => props.navOpen ? props.theme.colours.black : props.theme.colours.white};
      }
    }
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
                            <Logo/>
                        </Link>
                    </div>
                    <Navigation/>
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