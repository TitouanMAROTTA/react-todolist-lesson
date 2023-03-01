import { configureStore } from '@reduxjs/toolkit';
import ColumnsSlice from './Slice/ColumnsSlice';
import ItemsSlice from './Slice/ItemsSlice';



export default configureStore({
    reducer: {
        ColumnsSlice: ColumnsSlice,
        ItemsSlice: ItemsSlice
    },
});