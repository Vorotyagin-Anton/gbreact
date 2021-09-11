import { createSlice, configureStore, createAsyncThunk } from '@reduxjs/toolkit'

const toggleShowNameMiddleware = createAsyncThunk(
    'profile/toggleShowNameMiddleware',
    async (text) => {
        await setTimeout(() => console.log(text), 1500);
        return 'test';
    }
)

const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        showName: false,
        name: 'Default'
    },
    reducers: {
    },
    extraReducers: {
        [toggleShowNameMiddleware.fulfilled]: (state, action) => {
            state.showName = !state.showName;
            console.log(action.payload);
        }
    }
});

const store = configureStore({
    reducer: profileSlice.reducer
});

export { store, toggleShowNameMiddleware };