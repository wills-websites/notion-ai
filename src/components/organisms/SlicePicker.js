import React from 'react';
import PropTypes from "prop-types";
import SliceResponsiveBlocks from "./SliceResponsiveBlocks";
import SliceCTA from "./SliceCTA";
import SliceTopicList from "./SliceTopicList";
import SliceTwoColumns from "./SliceTwoColumns";
import SliceGraphicBlock from "./SliceGraphicBlock";
import SliceCarousel from "./SliceCarousel";
import SlicePlanType from "./SlicePlanType";
import SliceFlipCarousel from "./SliceFlipCarousel";
import SliceFAQ from "./SliceFAQ";

function SlicePicker({slice}) {
    return (
        <>
            {slice.slice_type === 'responsive_blocks' && <SliceResponsiveBlocks slice={slice}/>}
            {slice.slice_type === 'cta' && <SliceCTA slice={slice}/>}
            {slice.slice_type === 'topic_list' && <SliceTopicList slice={slice}/>}
            {slice.slice_type === 'two_columns' && <SliceTwoColumns slice={slice}/>}
            {slice.slice_type === 'graphic_block' && <SliceGraphicBlock slice={slice}/>}
            {slice.slice_type === 'block_carousel' && <SliceCarousel slice={slice}/>}
            {slice.slice_type === 'plan_type' && <SlicePlanType slice={slice}/>}
            {slice.slice_type === 'business_carousel' && <SliceFlipCarousel slice={slice}/>}
            {slice.slice_type === 'faq' && <SliceFAQ slice={slice}/>}
        </>
    )
}

SlicePicker.propTypes = {
    slice: PropTypes.object.isRequired,
    pageTitle: PropTypes.string,
};

export default SlicePicker;