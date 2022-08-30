import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import throttle from 'lodash.throttle';

const Holder = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  @media ( ${props => props.theme.breakpoints.md} ) {
    transform: ${props => props.show ? 'translateY(0)' : 'translateY(-100%)'};
    transition: transform 0.25s ease-in-out;
  }


  .header-grid {
    position: relative;
    z-index: 2;
  }
`;

function HeaderScrollTransition({children}) {
    const [transparent, setTransparent] = useState(true);
    const [show, setShow] = useState(true);
    const [lastScrollTop, setLastScrollTop] = useState(0);

    useEffect(() => {

        const onScroll = () => {
            let st = window.pageYOffset || document.documentElement.scrollTop;
            if (st < 100) {
                setTransparent(true);
            } else {
                setTransparent(false);
            }
            if (st > lastScrollTop) {
                // downscroll
                setShow(false);
            } else {
                // upscroll
                setShow(true);
            }
            setLastScrollTop(st <= 0 ? 0 : st);
        }

        const throttledCount = throttle(onScroll, 100);
        window.addEventListener('scroll', throttledCount);
        return () => window.removeEventListener('scroll', throttledCount);

    }, [lastScrollTop]);


    return (
        <Holder transparent={transparent} show={show}>
            {children}
        </Holder>
    )
}

export default HeaderScrollTransition;