import React from "react";
import PropTypes from "prop-types";
// import '../utils/fontface.css';
import GlobalStyles from "../components/atoms/GlobalStyles";
import {ThemeProvider} from "styled-components";
import {theme} from "../utils/styling";
import ColourSchemes from "../components/organisms/ColourSchemes";
import Transition from "../components/atoms/Transition";

function Index({location, children}) {
    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyles/>
                <ColourSchemes path={location.pathname}>
                    <Transition location={location}>
                        <main>{children}</main>
                    </Transition>
                </ColourSchemes>
            </>
        </ThemeProvider>
    );
}

Index.propTypes = {
    children: PropTypes.node.isRequired,
    location: PropTypes.object.isRequired,
};

export default Index;
