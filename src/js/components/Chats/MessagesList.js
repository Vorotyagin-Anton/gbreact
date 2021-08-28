import { makeStyles, createStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => createStyles({
    messageInList: {
        margin: '5px',
        padding: '5px',
        'background-color': theme.palette.secondary.main,
        'border-radius': '10px'
    }
}));

function MessagesList(props) {
    const { chatId } = useParams();
    const classes = useStyles(props);

    return (
        props.messageslist.map(
            (message, index) => {
                if (message.chatId === chatId) {
                    return <div key={index} className={classes.messageInList}>
                        {message.author}: {message.text}
                    </div>
                }
                else {
                    return null;
                }
            }
        )
    );
}

export default MessagesList;