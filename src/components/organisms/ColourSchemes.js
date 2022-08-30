import React, {useState, useEffect} from 'react';
import {ThemeProvider} from 'styled-components';
import PropTypes from 'prop-types';
import {theme} from '../../utils/styling';
import Header from '../molecules/Header';
import Footer from '../molecules/Footer';

const schemes = {
    dark: {
        bgColour: theme.colours.black,
        textColour: theme.colours.white,
    },
    light: {
        bgColour: theme.colours.white,
        textColour: theme.colours.black,
    }
};

function ColourSchemes({children, path}) {
    const [scheme, setScheme] = useState(schemes.light);

    useEffect(() => {
        if (path.includes('enterprise')) {
            setScheme(schemes.dark);
        } else {
            setScheme(schemes.light);
        }
    }, [path]);

    return (
        <ThemeProvider theme={scheme}>
            <Header/>
            {children}
            <Footer/>
        </ThemeProvider>
    )
}

ColourSchemes.propTypes = {
    path: PropTypes.string.isRequired
};

ColourSchemes.defaultProps = {
    path: '/'
};

export default ColourSchemes;