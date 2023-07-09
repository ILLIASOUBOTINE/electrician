import { createSlice } from "@reduxjs/toolkit";


const loadingSlice = createSlice({
    name: 'loading',
    initialState: {
        isLoading: false
    },
    reducers: {
        openLoading: (state) => {
            state.isLoading = true;
        },
        closeLoading: (state) => {
            state.isLoading = false;
        }

    }
})

export const {openLoading, closeLoading} = loadingSlice.actions;

export default loadingSlice;