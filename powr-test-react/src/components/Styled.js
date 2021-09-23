import styled from "styled-components";

const StyledBox = styled.div`
  background: ${props => props.bgColor};
  flex: 0 0 auto;
  width: 60px;
  height: 60px;
  border: 1px solid black;
  margin-right: 5px;
`;

const StyledContainer = styled.div`
  background: white;
  display: inline-flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid black;
  padding: 10px;
  flex: 3;
`;

const StyledButtonCont = styled.div`
  background: #e0e0e0;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px 20px;
  display: inline-block;
  margin: 10px;
  postion: relative;
`

const StyledButton = styled.div`
  background: #e0e0e0;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px 20px;
  display: inline-block;
  margin: 5px;
`

const StyledButtonMenu = styled.div`
  position: absolute;
  width: 250px;
  height: 200px;
  margin-top: -65px;
  margin-left: -60px;
`
const StyledInputForm = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin-top: 200px;
`

const StyledOutputForm = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin-top: 100px;
`

const StyledSaveForm = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin-top: 100px;
`

const StyledInput = styled.textarea`
  width: 300px;
`
const StyledOutput = styled.div`
  flex-grow: 3; 
  padding-left: 10px;
  color: #333333;
  background: #f1f1f1;
`

export { StyledBox, StyledContainer, StyledButton, StyledButtonMenu,
    StyledButtonCont, StyledInput, StyledOutput, StyledInputForm,
    StyledOutputForm, StyledSaveForm };