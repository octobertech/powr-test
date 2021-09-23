import React, {useState, useEffect} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Container from './Container';
import {StyledButton, StyledInput, StyledOutput, StyledInputForm, StyledOutputForm, StyledSaveForm} from "./Styled";

export default function BoxContainer(props) {
    let history = useHistory();
    const { id } = useParams();
    const [boxes, setBoxes] = useState([]);
    const [jsonInput, setJsonInput] = useState('');
    const [jsonOutput, setJsonOutput] = useState('');
    useEffect(() => {
        if (id) {
            const fetchData = async () => {
                await fetch(`https://boxcom2.herokuapp.com/boxes/${id}`)
                    .then(response => response.json())
                    .then(data => {
                        if (data) {
                            const resData = JSON.parse(data);
                            setBoxes(resData.items);
                            setJsonInput('');
                            setJsonOutput('');
                        }
                    });
            }
            try {
                fetchData();
            } catch (e) {
                console.error(e);
            }
        }
    }, [id]);
    const handleInput = (e) => {
        e.preventDefault();
        setJsonInput(e.target.value);
    }
    const handleInputBuild = (e) => {
        e.preventDefault();
        const input = JSON.parse(jsonInput);
        setBoxes(input?.items);
    }
    const handleOutput = () => {
        setJsonOutput(JSON.stringify({type: 'container', items: boxes}))
    }
    const handleSave = async () => {
        try {
            await fetch(`https://boxcom2.herokuapp.com/boxes`, {
                method: 'POST',
                body: JSON.stringify({type: 'container', items: boxes}),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
                .then(response => response.json())
                .then(data => {
                    if (data) {
                        history.push('/' + data?.id);
                    }
                });
        } catch (e) {
            console.error(e);
        }


    }

    return (
        <React.Fragment>
            <Container initBoxes={boxes} parent={boxes}/>
            <StyledInputForm>
                <StyledInput onChange={(e) => handleInput(e)} /> <StyledButton onClick={(e) => handleInputBuild(e)}>Build</StyledButton>
            </StyledInputForm>
            <StyledOutputForm>
                <StyledButton onClick={() => handleOutput()}>Create JSON</StyledButton> <StyledOutput><p>{jsonOutput}</p></StyledOutput>
            </StyledOutputForm>
            <StyledSaveForm>
                <StyledButton onClick={() => handleSave()} >Save</StyledButton>
            </StyledSaveForm>
        </React.Fragment>

    );
};