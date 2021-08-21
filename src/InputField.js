import {useState} from "react";

import './InputField.sass';

function InputField(props) {
    const [ inputText, setInputText ] = useState('');

    return (
        <div className='inputForm'>
            <input
                className='inputForm__textarea'
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                style={{
                    color: "red",
                }}
            />
            <input
                className='inputForm__button'
                type="button"
                onClick={() => {props.changeMessagesList('user1', inputText); setInputText('')}}
                value='Send Message'
            />
        </div>
    );
}

export default InputField;