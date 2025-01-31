import { createSlice } from "@reduxjs/toolkit";
const filterSlice = createSlice({
    name: "filters",
    initialState: {
        title: "",
    },
    reducers: {
        changeFilter(state, action) {
            state.title = action.payload;
        }
    }
});
export const selectNameFilter = state => state.filters.title;
export default  filterSlice.reducer;
export const { changeFilter } = filterSlice.actions;