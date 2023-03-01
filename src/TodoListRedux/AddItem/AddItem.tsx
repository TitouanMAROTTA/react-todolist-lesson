import React, { useState } from 'react';
import { Button, Input, Select } from 'antd';
import { addItem } from '../Slice/ItemsSlice'
import { useDispatch, useSelector } from 'react-redux';



const AddItem = () => {
  const [newItemName, setNewItemName] = useState<string>('');
  const [newItemColumn, setNewItemColumn] = useState<string>('');

  const dispatch = useDispatch();
  const columns = useSelector((state: any) => state.ColumnsSlice.columns);

  const handleOnItemNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewItemName(e.target.value);
  };

  const handleOnCategoryChange = (newValue: string) => {
    setNewItemColumn(newValue);
  };

  const handleOnClickNewItem = () => {
    if (newItemName && newItemColumn) {
      const newItem = { newItemName, newItemColumn };
      dispatch(addItem(newItem));
      setNewItemName('');
      setNewItemColumn('');
    }
  };

  return (
    <div className="todo-list-edit-add-item">
      <Input
        placeholder="Item name"
        onChange={handleOnItemNameChange}
        value={newItemName}
      />
      <Select
        placeholder="Select column"
        onChange={handleOnCategoryChange}
        value={newItemColumn}
        options={columns}
      />
      <Button
        disabled={!newItemName?.length || !newItemColumn?.length}
        onClick={handleOnClickNewItem}
      >
        Add Item
      </Button>
    </div>
  );
};

export default AddItem;