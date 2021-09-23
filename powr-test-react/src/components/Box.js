import React, {useState} from 'react';
import {StyledBox} from "./Styled";
import {ChromePicker} from 'react-color';

export default function Box(props) {
    const {data, changeColor, index} = props;
    const [showPicker, setShowPicker] = useState(false);
    return (
        <StyledBox bgColor={data?.color || 'orange'} onClick={() => setShowPicker(true)}>
            {showPicker && <ChromePicker color={data?.color || 'orange'} onChange={(color) => changeColor(color, index)} onChangeComplete={() => setShowPicker(false)}/> }
        </StyledBox>
    );
};