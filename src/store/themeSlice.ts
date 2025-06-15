import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    darkMode: true,
    isBouncing: false,
    showingIcon: true,
    currentTab: 1,
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
        setCurrentTab: (state, action) => {
            state.currentTab = action.payload;
        }

    },
});

export const { startBouncing, toggleIcon, completeBouncing, setDarkMode, setCurrentTab } = themeSlice.actions;
export default themeSlice.reducer;