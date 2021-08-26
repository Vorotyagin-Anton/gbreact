import '../../css/Chats.css';

import React, { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";

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

function Chats() {
  const [ messagesList, setMessagesList] = useState([]);
  const [ chatsList, setChatsList ] = useState([{id: 1, name: 'chat_1'}, {id: 2, name: 'chat_2'}]);
  const { chatId } = useParams();

  const changeMessagesList = (author = 'userName', text = 'emptyMessage') => {
      if (text.trim() !== '') {
          setMessagesList(
              prevList => [...prevList, {chatId: chatId, author: author, text: text}]
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
              <div className="mainContent">
                  <ChatsList chatsList={chatsList} />
                  <div className='messagesBlock'>
                      <div className='messagesBox'>
                          <MessagesList messageslist={messagesList} />
                      </div>
                      <InputField changeMessagesList={changeMessagesList} />
                  </div>
              </div>
      </ThemeProvider>
  );
}

export default Chats;
