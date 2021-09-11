import React, { useState } from "react";
import { store, toggleShowName } from "../../store/profile";

export default function Profile() {
    const [dummy, setDummy] = useState();
    const { showName, name } = store.getState();

    const setShowName = () => {
        store.dispatch(toggleShowName());
        setDummy({});
    }

    return (
        <div>
            <h4>Profile</h4>
            <input
                type="checkbox"
                checked={showName}
                value={showName}
                onChange={setShowName}
            />
            <span>Show Name</span>
            {showName && <div>{name}</div>}
        </div>
    );
}