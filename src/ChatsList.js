import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function ChatsList(props) {
    const chatsList = props.chatsList.map(
        chatInfo =>
            <ListItem button key={chatInfo.id}>
                <ListItemText primary={chatInfo.name} />
            </ListItem>
    );

    return (
        <List component="nav" aria-label="main mailbox folders">
            {chatsList}
        </List>
    );
}

export default ChatsList;