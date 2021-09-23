import React, {useState, useEffect} from 'react';
import Box from './Box';
import {StyledContainer, StyledButton, StyledButtonMenu, StyledButtonCont} from "./Styled";

const Container = (props) => {
    const { initBoxes , parent} = props;
    const boxes = initBoxes;
    const addBoxes = (box) => {
        boxes.push(box);
        setShowMenu(false);
    }
    const [showMenu, setShowMenu] = useState(false);
    const changeColor = (color, index) => {
        boxes[index].color = color.hex;
    }
    useEffect(() => {

    }, [initBoxes])

    return (
        <StyledContainer>
            { boxes && boxes.map( (box, key) => {
                if (box?.type === 'container') {
                    return <Container initBoxes={box?.items} parent={parent} key={key} />
                } else if (box?.type === 'box') {
                    return <Box data={box} key={key} index={key} changeColor={changeColor}  />
                } else {
                    return null
                }
            } )}

                <StyledButtonCont onMouseOver={() => setShowMenu(true)} > Add {showMenu && <StyledButtonMenu onMouseOut={() => setShowMenu(false)}>
                    <StyledButton onClick={() => addBoxes({type: 'box', color: 'orange' } ) } >Box</StyledButton>
                    <StyledButton onClick={() => addBoxes({type: 'container', items: [] } ) } >Container</StyledButton>
                </StyledButtonMenu>}
                    </StyledButtonCont>




        </StyledContainer>
    );
};

export default Container;