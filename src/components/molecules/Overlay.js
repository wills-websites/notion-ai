import React, {useState} from "react"
import {Link} from "gatsby"
import styled from "styled-components";
import useLockBodyScroll from "../../hooks/useLockBodyScroll";
import Cross from "../../assets/svg/cross.inline.svg";

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
    }

    li {
      margin: 0;
      padding: 0.75rem;
      border-radius: 5rem;
      background-color: ${props => props.theme.colours.lightgrey};
      text-align: center;
      cursor: pointer;
    }

    .content {
      display: flex;
      background-color: ${props => props.theme.colours.lightgrey};
      border-radius: 5rem;
      justify-content: space-between;
      padding: calc(0.5rem - 5px);

      div {
        display: flex;
        column-gap: 1rem;
      }

      .button {
        background-color: ${props => props.theme.colours.lightgrey};
        border-radius: 5rem;
      }

      a:hover {
        background-color: ${props => props.theme.colours.lightgrey};
        border-radius: 5rem;
      }
    }

  }
`

function Overlay({hide}) {
    const [toggle, setToggle] = useState(false)

    useLockBodyScroll()
    return (
        <Holder>
            <ul>
                <Link onClick={hide} to="/">
                    <li>Start your free trial today</li>
                </Link>

                <li onClick={() => setToggle(!toggle)}>Products</li>
                {toggle && <div className="content">
                    <div>
                        <Link onClick={hide} to="/air">
                            <li>AiR</li>
                        </Link>
                        <Link onClick={hide} to="/stream">
                            <li>Stream</li>
                        </Link>
                        <Link onClick={hide} to="/enterprise">
                            <li>Enterprise</li>
                        </Link>
                    </div>
                    <button className="button icon" onClick={() => setToggle(false)}>
                        <Cross/>
                    </button>
                </div>}
                <Link onClick={hide} to="/plans">
                    <li>Plans</li>
                </Link>
                <Link onClick={hide} to="/articles">
                    <li>Articles</li>
                </Link>
                <Link onClick={hide} to="/about">
                    <li>About</li>
                </Link>
            </ul>
        </Holder>
    )

}

export default Overlay
