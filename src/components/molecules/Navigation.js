import React, {Component} from "react"
import {Link} from "gatsby"
import styled from "styled-components";

const Holder = styled.div`
  width: fit-content;
  margin-left: auto;

  ul {
    list-style: none;
    margin: 0 0 0 auto;
    background-color: ${props => props.theme.colours.lightgrey};
    backdrop-filter: blur(8px);
    border-radius: 2rem;
    padding: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: ${props => props.theme.colours.white};


    a {
      text-decoration: none;
    }

    li {
      margin: 0;
      padding: 0.5rem;
      border-radius: 5rem;
      @media ( ${props => props.theme.breakpoints.md} ) {
        padding: 0.5rem 2rem;
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
      border-radius: 5rem;
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
                                <Link to="/air">
                                    <li>AiR</li>
                                </Link>
                                <Link to="/stream">
                                    <li>Stream</li>
                                </Link>
                                <Link to="/enterprise">
                                    <li>Enterprise</li>
                                </Link>
                            </div>
                        </Dropdown>
                        <Link to="/plans">
                            <li>Marketplace</li>
                        </Link>
                        <Link to="/articles">
                            <li>The Lab</li>
                        </Link>
                        <Link to="/about">
                            <li>About</li>
                        </Link>
                        <button className="button link">
                            <li>Login</li>
                        </button>
                    </ul>
                </Holder>
            </nav>
        )
    }
}

export default Navigation
