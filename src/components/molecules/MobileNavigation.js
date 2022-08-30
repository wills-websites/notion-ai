import React, {useState} from "react"
import {Link} from "gatsby"
import styled from "styled-components";
import Cross from '../../assets/svg/cross.inline.svg'
import Overlay from "./Overlay";


const Holder = styled.div`
  margin-left: auto;

  .menu-button {
    z-index: 500;
  }
`


function MobileNavigation() {
    const [toggle, setToggle] = useState(false)
    return (
        <nav className="Navigation">
            <Holder>
                <button className="menu-button button neutral" onClick={() => setToggle(!toggle)}>Menu</button>
                {toggle &&
                    <Overlay hide={() => setToggle(false)}/>
                }
            </Holder>
        </nav>
    )

}

export default MobileNavigation
