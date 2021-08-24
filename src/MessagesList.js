import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => createStyles({
    messageInList: {
        margin: '5px',
        padding: '5px',
        'background-color': theme.palette.secondary.main,
        'border-radius': '10px'
    }
}));

function MessagesList(props) {
    const classes = useStyles(props);
    return (
        props.messageslist.map(
            (message, index) =>
                <div key={index} className={classes.messageInList}>
                    {message.author}: {message.text}
                </div>
        )
    );
}

export default MessagesList;