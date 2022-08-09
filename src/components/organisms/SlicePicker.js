import React from 'react';
import PropTypes from "prop-types";
import SliceTwoBlocks from "./SliceTwoBlocks";
import SliceCTA from "./SliceCTA";
import SliceTopicList from "./SliceTopicList";

function SlicePicker({slice, pageTitle}) {
    return (
        <>
            {slice.slice_type === 'two_blocks' && <SliceTwoBlocks slice={slice} pageTitle={pageTitle}/>}
            {slice.slice_type === 'cta' && <SliceCTA slice={slice} pageTitle={pageTitle}/>}
            {slice.slice_type === 'topic_list' && <SliceTopicList slice={slice} pageTitle={pageTitle}/>}
        </>
    )
}

SlicePicker.propTypes = {
    slice: PropTypes.object.isRequired,
    pageTitle: PropTypes.string,
};

export default SlicePicker;