import React from "react";
import styled from "styled-components";
import PrismicRichText from "../atoms/PrismicRichText";

const Holder = styled.div`
  padding: 6rem 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

function OffsetTwoColumn({mappedItem}) {
    return (
        <Holder>
            {mappedItem.map((item, i) => (
                <Grid key={i}>
                    <PrismicRichText render={item.subheading.richText}/>
                    <PrismicRichText render={item.description1.richText}/>
                </Grid>
            ))}
        </Holder>
    );
}

OffsetTwoColumn.propTypes = {};
export default OffsetTwoColumn;