import './App.css';
import React, { useState, useEffect } from "react";
import InputField from "./InputField";
import MessagesList from "./MessagesList";

function App() {
  const [ messagesList, setMessagesList] = useState([]);

  const changeMessagesList = (author = 'userName', text = 'emptyMessage') => {
      setMessagesList(
          prevList => [...prevList, {author: author, text: text}]
      )
  }

  useEffect(
      () => {
          let lastMessage = messagesList[messagesList.length - 1];
          if (lastMessage && lastMessage.author !== 'robot') {
              setTimeout(() => changeMessagesList('robot', 'robot answer'), 1500);
          }
      },
      [messagesList]
  );

  return (
      <div>
          <div className='messagesBox'>
              <MessagesList messageslist={messagesList} />
          </div>
          <InputField changeMessagesList={changeMessagesList} />
      </div>
  );
}

export default App;
