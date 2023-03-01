import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import AddColumn from './AddColumn/AddColumn';
import AddItem from './AddItem';
import ColumnComp from './Column';
import ColumnModal from './ColumnModal';
import ItemModal from './ItemModal';
import './TodoListRedux.css';
import { setColumns } from './Slice/ColumnsSlice'
import { setItems } from './Slice/ItemsSlice'



export interface Column {
    value: string;
    label: string;
}

export interface Item {
    id: string;
    columnId: string;
    label: string;
}

const TodoListRedux = () => {
    const [itemModal, setItemModal] = useState<Item>();
    const [columnModal, setColumnModal] = useState<Column>();

    const dispatch = useDispatch();
    const columns = useSelector((state: any) => state.ColumnsSlice.columns);
    const items = useSelector((state: any) => state.ItemsSlice.items);



    const getColumnItems = (columnIdSelected: string) => {
        return items.filter(({ columnId }: { columnId: string }) => columnId === columnIdSelected);
    };


    const handleOnEditItem = (idItem: string) => {
        const item = items.find((item: Item) => item.id === idItem);

        if (item) {
            setItemModal(item);
        }
    };

    const handleOnEditColumn = (idColumn: string) => {
        const column = columns.find((column: Column) => column.value === idColumn);
      
        if (column) {
          setColumnModal(column);
        }
      };

    const handleOnCloseItem = () => {
        setItemModal(undefined);
    };

    const handleOnCloseColumn = () => {
        setColumnModal(undefined);
    };

    const handleOnSaveItem = (newItem: Item) => {
        dispatch(setItems(items.map((item : Item) =>item.id === newItem.id ? newItem : item)));
        handleOnCloseItem();
    };

    const handleOnSaveColumn = (newColumn: Column) => {
        dispatch(setColumns(columns.map((column : Column) =>column.value === newColumn.value ? newColumn : column)));
        handleOnCloseColumn();
    };

    return (
            <div className="todo-list-edit">
                <AddColumn />
                <AddItem />

                <div className="todo-list-edit-columns">
                {columns.map((column: Column) => {
                        const { value, label } = column;
                        const columnItems = getColumnItems(value);

                        return (
                            <ColumnComp
                                value={value}
                                label={label}
                                columnItems={columnItems}
                                onEditItem={handleOnEditItem}
                                onEditColumn={handleOnEditColumn}
                            />
                        );
                    })}
                </div>

                <ItemModal
                    item={itemModal}
                    onCloseItem={handleOnCloseItem}
                    onSaveItem={handleOnSaveItem}
                    columns={columns}
                />

                <ColumnModal
                    column={columnModal}
                    onCloseColumn={handleOnCloseColumn}
                    onSaveColumn={handleOnSaveColumn}
                />
            </div>

    );
};

export default TodoListRedux;
