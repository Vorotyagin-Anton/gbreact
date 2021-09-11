import {useState, useRef, useEffect} from "react";
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import TextField from '@material-ui/core/TextField';

import '../../../css/InputField.sass';

function InputField(props) {
    const [ inputText, setInputText ] = useState('');

    return (
        <div className='inputForm'>
            <TextField
                id="outlined-textarea"
                label="Type your message here"
                multiline
                variant="outlined"
                className='inputForm__textarea'
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
            />
            <Button
                variant="contained"
                color="primary"
                endIcon={<SendIcon />}
                className='inputForm__button'
                onClick={() => {props.changeMessagesList('user1', inputText); setInputText('')}}
            >
                Send Message
            </Button>
        </div>
    );
}

export default InputField;