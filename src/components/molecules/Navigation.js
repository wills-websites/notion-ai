import React, {useState} from "react"
import {Link} from "gatsby"
import styled from "styled-components";
import Cross from '../../assets/svg/cross.inline.svg'

const Holder = styled.div`
  width: fit-content;
  margin-left: auto;

  ul {
    list-style: none;
    margin: 0 0 0 auto;
    background-color: ${props => props.theme.colours.lightgrey};
    backdrop-filter: blur(8px);
    border-radius: 2rem;
    padding: 5px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: ${props => props.theme.colours.white};


    a {
      text-decoration: none;
    }

    li {
      margin: 0;
      padding: calc(0.5rem - 5px);
      border-radius: 5rem;
      @media ( ${props => props.theme.breakpoints.md} ) {
        padding: calc(0.5rem - 5px) 2rem;
      }

      &:hover {
        background-color: rgba(0, 0, 0, 0.2);
      }
    }
  }
`

const Dropdown = styled.div`
  li {
    cursor: pointer;
  }

  .content {
    margin-top: 10px;
    padding: 5px;
    position: absolute;
    z-index: 200;
    background-color: ${props => props.theme.colours.lightgrey};
    backdrop-filter: blur(8px);
    border-radius: 2rem;
    width: 100%;
    display: flex;
    justify-content: space-between;

    div {
      display: flex;
    }

    button {
      border-radius: 5rem;

      :hover {
        background-color: rgba(0, 0, 0, 0.2);
      }
    }

    li {
      width: 100%;
      text-align: center;
      border-radius: 5rem;
      color: ${props => props.theme.colours.white};
      padding: calc(0.5rem - 5px);

      :hover {
        background-color: rgba(0, 0, 0, 0.2);
      }

      @media ( ${props => props.theme.breakpoints.md} ) {
        padding: calc(0.5rem - 5px) 2rem;
      }

    }
  }
`

function Navigation() {
    const [toggle, setToggle] = useState(false)
    return (
        <nav className="Navigation">
            <Holder>
                <ul>
                    <Dropdown>
                        <li onClick={() => setToggle(true)}>Products</li>
                        {toggle && <div className="content">
                            <div>
                                <Link onClick={() => setToggle(false)} to="/air">
                                    <li>AiR</li>
                                </Link>
                                <Link onClick={() => setToggle(false)} to="/stream">
                                    <li>Stream</li>
                                </Link>
                                <Link onClick={() => setToggle(false)} to="/enterprise">
                                    <li>Enterprise</li>
                                </Link>
                            </div>
                            <button className="button icon" onClick={() => setToggle(false)}>
                                <Cross/>
                            </button>
                        </div>}
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

export default Navigation
