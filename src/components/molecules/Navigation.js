import React, {Component} from "react"
import {Link} from "gatsby"
import styled from "styled-components";

const Holder = styled.div`
  ul {
    list-style: none;
    margin: 0 0 0 auto;
    background-color: rgba(150, 150, 150, 0.25);
    backdrop-filter: blur(8px);
    width: min-content;
    border-radius: 2rem;
    padding: 0;
    @media ( ${props => props.theme.breakpoints.md} ) {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      color: ${props => props.theme.colours.white};
    }

    a {
      text-decoration: none;
    }

    // a[aria-current="page"] {
      //   color: ${props => props.theme.colours.indigo};
    // }

    li {
      ${(props) => props.theme.fluidType(1)};
      margin: 1rem 0;
      border-radius: 1rem;
      @media ( ${props => props.theme.breakpoints.md} ) {
        margin: 0;
        padding: 0.5rem 2rem;
        ${(props) => props.theme.fluidType(-1)};
      }

      &:hover {
        background-color: ${props => props.theme.colours.grey};
      }
    }
  }
`

const Dropdown = styled.div`
  li {
    cursor: pointer;
  }

  .content {
    display: none;
    position: absolute;
    z-index: 200;

    li {
      width: 100%;
      display: block;
      margin: 0.5rem 0;
      text-align: center;
      ${(props) => props.theme.fluidType(-1)};
      background-color: rgba(0, 0, 0, 0.2);
      backdrop-filter: blur(8px);
      border-radius: 2rem;
      padding: 0.5rem 2rem;
      color: ${props => props.theme.colours.white};
    }
  }

  &:hover .content {
    display: block;
  }
`

class Navigation extends Component {
    render() {
        return (
            <nav className="Navigation">
                <Holder>
                    <ul>
                        <Dropdown>
                            <li>Products</li>
                            <div className="content">
                                <Link to="/air/">
                                    <li>AiR</li>
                                </Link>
                                <Link to="/stream/">
                                    <li>Stream</li>
                                </Link>
                                <Link to="/enterprise/">
                                    <li>Enterprise</li>
                                </Link>
                            </div>
                        </Dropdown>
                        <Link to="/plans/">
                            <li>Plans</li>
                        </Link>
                        <Link to="/articles">
                            <li>Articles</li>
                        </Link>
                        <Link to="/about/">
                            <li>About</li>
                        </Link>
                    </ul>
                </Holder>
            </nav>
        )
    }
}

export default Navigation
