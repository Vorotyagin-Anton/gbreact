import './App.css';
import React, { useState, useEffect } from "react";
import InputField from "./InputField";
import MessagesList from "./MessagesList";
import ChatsList from "./ChatsList";
import {
    ThemeProvider,
    createTheme,
} from "@material-ui/core/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#6495ED",
        },
        secondary: {
            main: "#8FF",
        },
    },
});

function App() {
  const [ messagesList, setMessagesList] = useState([]);
  const [ chatsList, setChatsList ] = useState([{id: 1, name: 'chat01'}, {id: 2, name: 'chat02'}]);

  const changeMessagesList = (author = 'userName', text = 'emptyMessage') => {
      if (text.trim() !== '') {
          setMessagesList(
              prevList => [...prevList, {author: author, text: text}]
          )
      }
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
  useEffect(() => {
      document.getElementById('outlined-textarea').focus();
  });

  return (
      <ThemeProvider theme={theme}>
          <div className='container'>
              <div className="mainContent">
                  <ChatsList chatsList={chatsList} />
                  <div className='messagesBlock'>
                      <div className='messagesBox'>
                          <MessagesList messageslist={messagesList} />
                      </div>
                      <InputField changeMessagesList={changeMessagesList} />
                  </div>
              </div>
          </div>
      </ThemeProvider>
  );
}

export default App;
