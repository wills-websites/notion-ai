import React from 'react';
import PropTypes from "prop-types";
import SliceResponsiveBlocks from "./SliceResponsiveBlocks";
import SliceCTA from "./SliceCTA";
import SliceTopicList from "./SliceTopicList";
import SliceTwoColumns from "./SliceTwoColumns";
import SliceGraphicBlock from "./SliceGraphicBlock";
import SliceCarousel from "./SliceCarousel";

function SlicePicker({slice, pageTitle}) {
    return (
        <>
            {slice.slice_type === 'responsive_blocks' && <SliceResponsiveBlocks slice={slice} pageTitle={pageTitle}/>}
            {slice.slice_type === 'cta' && <SliceCTA slice={slice} pageTitle={pageTitle}/>}
            {slice.slice_type === 'topic_list' && <SliceTopicList slice={slice} pageTitle={pageTitle}/>}
            {slice.slice_type === 'two_columns' && <SliceTwoColumns slice={slice} pageTitle={pageTitle}/>}
            {slice.slice_type === 'graphic_block' && <SliceGraphicBlock slice={slice} pageTitle={pageTitle}/>}
            {slice.slice_type === 'block_carousel' && <SliceCarousel slice={slice} pageTitle={pageTitle}/>}
        </>
    )
}

SlicePicker.propTypes = {
    slice: PropTypes.object.isRequired,
    pageTitle: PropTypes.string,
};

export default SlicePicker;