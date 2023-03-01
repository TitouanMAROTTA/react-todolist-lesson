import { createSlice } from '@reduxjs/toolkit';

interface State {
    columns: Column[];
}

export interface Column {
    value: string;
    label: string;
}

const generateId = () => {
    const date = new Date().getTime().toString();
    return date;
};

export const ColumnsSlice = createSlice({
    name: 'ColumnsSlice',
    initialState: {
        columns: [],
    },
    reducers: {
        setColumns: (state: State, action: { payload: Column[] }) => {
            state.columns = action.payload;
        },
        addColumn: (state: State, action: { payload: string }) => {
            const newColumn = {
                value: generateId(),
                label: action.payload,
            };
            
            state.columns.push(newColumn);
        },
        deleteColumn: (state: State, action: { payload: string  }) => {
            const index = state.columns.findIndex((col) => col.label === action.payload);
            console.log(index);
            if (index !== -1) {
                state.columns.splice(index, 1);
            }
        },
    },
});

export const { setColumns, addColumn, deleteColumn } = ColumnsSlice.actions;

export default ColumnsSlice.reducer;