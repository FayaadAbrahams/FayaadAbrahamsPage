import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    darkMode: true,
    isBouncing: false,
    showingIcon: true,
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        startBouncing: (state) => {
            state.isBouncing = true;
        },
        toggleIcon: (state) => {
            state.showingIcon = !state.darkMode;
        },
        completeBouncing: (state) => {
            state.darkMode = !state.darkMode;
            state.showingIcon = !state.darkMode;
            state.isBouncing = false;
        },
        setDarkMode: (state, action) => {
            state.darkMode = action.payload;
        },

    },
});

export const { startBouncing, toggleIcon, completeBouncing, setDarkMode } = themeSlice.actions;
export default themeSlice.reducer;