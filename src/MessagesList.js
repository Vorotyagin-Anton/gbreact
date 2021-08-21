import './MessagesList.sass';

function MessagesList(props) {
    return (
        props.messageslist.map((message) => <div className='messageInList'>{message.author}: {message.text}</div>)
    );
}

export default MessagesList;