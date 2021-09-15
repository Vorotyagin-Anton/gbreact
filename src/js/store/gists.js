import {configureStore, createAsyncThunk, createSlice} from '@reduxjs/toolkit'

const getDataFromApi = createAsyncThunk(
    'gists/getDataFromApi',
    async () => {
        return await fetch('https://api.github.com/gists/public').then((data) => data.json());
    }
)

const profileSlice = createSlice({
    name: 'gists',
    initialState: {
        gists: [],
        loading: false,
        errorMessage: ''
    },
    reducers: {
    },
    extraReducers: {
        [getDataFromApi.pending]: (state) => {
            state.loading = true;
            console.log('pending');
        },
        [getDataFromApi.fulfilled]: (state, action) => {
            state.loading = false;
            state.gists = action.payload;
            console.log('fulfilled');
            console.log(action.payload);
        },
        [getDataFromApi.rejected]: (state) => {
            state.loading = false;
            state.errorMessage = 'Ошибка запроса';
            console.log('rejected');
        }
    }
});

const store = configureStore({
    reducer: profileSlice.reducer
});

export { store, getDataFromApi };