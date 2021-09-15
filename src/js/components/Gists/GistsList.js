import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import React from "react";

function GistsList(props) {
    const GistsList = props.gistsList.map(
        gist =>
            <ListItem button key={gist.id}>
                <ListItemText primary={gist.node_id} />
            </ListItem>
    );

    return (
        <List component="nav" aria-label="main mailbox folders">
            {GistsList}
        </List>
    );
}

export default GistsList;