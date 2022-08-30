import React, {useState} from "react"
import {Link} from "gatsby"
import styled from "styled-components";
import useLockBodyScroll from "../../hooks/useLockBodyScroll";

const Holder = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  z-index: -100;
  background-color: ${props => props.theme.colours.white};

  ul {
    display: flex;
    flex-direction: column;
    padding: 8rem 0 0 0;
    margin: 0 1rem;
    list-style: none;
    row-gap: 1rem;

    a {
      text-decoration: none;

      li {
        margin: 0;
        padding: calc(0.5rem - 5px);
        border-radius: 5rem;
        background-color: ${props => props.theme.colours.lightgrey};
        text-align: center;
      }
    }

  }
`

function Overlay() {
    useLockBodyScroll()
    return (
        <Holder>
            <ul>
                <Link to="/">
                    <li>Start your free trial today</li>
                </Link>
                <Link to="products">
                    <li>Products</li>
                </Link>
                <Link to="plans">
                    <li>Plans</li>
                </Link>
                <Link to="articles">
                    <li>Articles</li>
                </Link>
                <Link to="about">
                    <li>About</li>
                </Link>
            </ul>
        </Holder>
    )

}

export default Overlay
