import { createSlice, configureStore } from '@reduxjs/toolkit'

const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        showName: false,
        name: 'Default'
    },
    reducers: {
        toggleShowName: state => {
            state.showName = !state.showName;
        }
    }
});

const store = configureStore({
    reducer: profileSlice.reducer
});

const toggleShowName = profileSlice.actions.toggleShowName;

export { store, toggleShowName };