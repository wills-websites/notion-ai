import React, {Component} from "react";
import PropTypes from "prop-types";
// import '../utils/fontface.css';
import GlobalStyles from "../components/atoms/GlobalStyles";
import {ThemeProvider} from "styled-components";
import {theme} from "../utils/styling";
import ColourSchemes from "../components/organisms/ColourSchemes";
import Transition from "../components/atoms/Transition";

class Index extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <>
                    <GlobalStyles/>
                    <ColourSchemes path={this.props.location.pathname}>
                        <Transition location={this.props.location}>
                            <main>{this.props.children}</main>
                        </Transition>
                    </ColourSchemes>
                </>
            </ThemeProvider>
        );
    }
}

Index.propTypes = {
    children: PropTypes.node.isRequired,
    location: PropTypes.object.isRequired,
};

export default Index;
