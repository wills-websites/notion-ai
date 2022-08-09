import React from 'react';
import PropTypes from "prop-types";
import SliceTwoBlocks from "./SliceTwoBlocks";

function SlicePicker({slice, pageTitle}) {
    return (
        <>
            {slice.slice_type === 'two_blocks' && <SliceTwoBlocks slice={slice} pageTitle={pageTitle} />}
        </>
    )
}

SlicePicker.propTypes = {
    slice: PropTypes.object.isRequired,
    pageTitle: PropTypes.string,
};

export default SlicePicker;