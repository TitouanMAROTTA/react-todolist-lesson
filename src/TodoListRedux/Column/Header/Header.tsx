import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { deleteColumn } from '../../Slice/ColumnsSlice'
import React from 'react';
import { useDispatch } from 'react-redux';



interface HeaderInterface {
    label: string;
    onEditColumn(): void;
}

const Header = ({ label, onEditColumn }: HeaderInterface) => {
    const dispatch = useDispatch();

     const HandleOnDeleteColumn = () => {
        dispatch(deleteColumn(label));
    };

    
    return (
        <div className="todo-list-column-header">
            {label}

            <Button
                type="primary"
                size="small"
                icon={<EditOutlined />}
                onClick={onEditColumn}
            />

            <Button
                type="primary"
                danger
                size="small"
                icon={<DeleteOutlined />}
                onClick={HandleOnDeleteColumn}
            />
        </div>
    );
};

export default Header;
