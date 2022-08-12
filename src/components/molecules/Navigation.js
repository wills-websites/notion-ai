import React, {Component} from "react"
import {Link} from "gatsby"
import styled from "styled-components";

const Holder = styled.div`
  ul {
    list-style: none;
    margin: 0 0 0 auto;
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(5px);
    width: min-content;
    border-radius: 2rem;
    padding: 0.5rem 2rem;
    @media ( ${props => props.theme.breakpoints.md} ) {
      border-top: none;
      display: flex;
      column-gap: 4rem;
      justify-content: flex-end;
      align-items: center;
      color: ${props => props.theme.colours.white};
    }

    li {
      ${(props) => props.theme.fluidType(1)};
      margin: 1rem 0;
      @media ( ${props => props.theme.breakpoints.md} ) {
        margin: 0;
        ${(props) => props.theme.fluidType(-1)};
      }

      a {
        text-decoration: none;
      }

      a[aria-current="page"] {
        border-bottom: 2px solid ${props => props.theme.colours.white};
      }

    }
  }
`

class Navigation extends Component {
    render() {
        return (
            <nav className="Navigation">
                <Holder>
                    <ul>
                        <li><Link to="/">Products</Link></li>
                        <li><Link to="/plans/">Plans</Link></li>
                        <li><Link to="/">Articles</Link></li>
                        <li><Link to="/about/">About</Link></li>
                    </ul>
                </Holder>
            </nav>
        )
    }
}

export default Navigation
