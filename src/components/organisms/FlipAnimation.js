import React, {useState} from "react";
import {CSSTransition} from "react-transition-group";
import styled from "styled-components";
import PrismicRichText from "../atoms/PrismicRichText";
import {GatsbyImage} from "gatsby-plugin-image";

const Holder = styled.div`
  position: relative;

  .card-front,
  .card-back {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50vh;
    width: 100%;
    padding: 2rem;
    border-radius: 2rem;
  }

  .card-front {
    background-color: ${props => props.theme.colours.white};
    position: absolute;
    top: 0;
    left: 0;
  }

  .card-back {
    background-color: ${props => props.theme.colours.white};
    color: ${props => props.theme.colours.black};
  }

  .front-face-transition-enter {
    transform: rotateY(180deg);
  }

  .front-face-transition-enter-active {
    transition: all 1000ms ease;
    transform: rotateY(0deg);
  }

  .front-face-transition-enter-done {
    transform: rotateY(0deg);
  }

  .front-face-transition-exit {
    transform: rotateY(0deg);
  }

  .front-face-transition-exit-active {
    transform: rotateY(180deg);
    transition: all 1000ms ease;
  }

  .front-face-transition-exit-done {
    transform: rotateY(180deg);
  }

  .back-face-transition-enter {
    transform: rotateY(-180deg);
  }

  .back-face-transition-enter-active {
    transform: rotateY(0deg);
    transition: all 1000ms ease;
  }

  .back-face-transition-enter-done {
    transform: rotateY(0deg);
  }

  .back-face-transition-exit {
    transform: rotateY(0deg);
  }

  .back-face-transition-exit-active {
    transform: rotateY(-180deg);
    transition: all 1000ms ease;
  }

  .back-face-transition-exit-done {
    transform: rotateY(-180deg);
  }
`

function FlipAnimation({front, back}) {
    const [flipped, setFlipped] = useState(false);

    return (
        <Holder className="card-container">
            <div onClick={() => setFlipped(!flipped)}>
                <CSSTransition
                    in={!flipped}
                    timeout={1000}
                    classNames="front-face-transition"
                >
                    <div className="card-front">
                        <GatsbyImage alt="Test" image={front}/>
                    </div>
                </CSSTransition>
                <CSSTransition
                    in={flipped}
                    timeout={1000}
                    classNames="back-face-transition"
                >
                    <div className="card-back">
                        <PrismicRichText render={back}/>
                    </div>
                </CSSTransition>
            </div>
        </Holder>
    );
}

export default FlipAnimation