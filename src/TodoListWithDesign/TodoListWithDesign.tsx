import React, { useState  } from 'react';
import './TodoListWithDesign.css';
import { Input, Button, Row, Col, Select, List } from 'antd';
// import bcrypt from 'bcrypt';

const TodoListBasic = () => {
    
    const [task, setTask] = useState<string>('');
    const [category, setCategory] = useState<string>('Todo');
    const [newCategory, setNewCategory] = useState<string>('Todo');
    const [todoTaskList, setTodoTaskList] = useState<string[]>([]);
    const [wipTaskList, setWipTaskList] = useState<string[]>([]);
    const [doneTaskList, setDoneTaskList] = useState<string[]>([]);
    const [categoryList, setCategoryList] = useState<Category[]>([]);



    // interface Task {
	// 	id: string;
	// 	name: string;
	// 	categoryId: string;
	// }

    interface Category {
		id: string;
		name: string;
	}



    const handleChoiceTask = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTask(e.target.value);
    }

    const handleChoiceCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewCategory(e.target.value);
    }


    const handleChangeCategory = (e : React.ChangeEvent<HTMLSelectElement>) => {
        setCategory(e.target.value);
    }
    

    const handleAddTask = () => {
        console.log(category);
        if(category === 'Todo'){
            setTodoTaskList([...todoTaskList, task]);
        }
        else if (category === 'WIP'){
            setWipTaskList([...wipTaskList, task]);
        }
        else if(category === 'Done'){
            setDoneTaskList([...doneTaskList, task]);
        }
    }

    const handleAddCategory = async () => {
        if (newCategory.length > 0) {
			const id = await generateId();
			setCategoryList([...categoryList, { id: id, name: category }]);
			setNewCategory("");
		}
    }

    
    const generateId = async () => {
        const date = new Date().getTime().toString();
        // const salt = await bcrypt.genSalt();
        // const hash = await bcrypt.hash(date, salt);
        // return hash;
        return date;
    };


    return <>
        <Row>
            <Col span={20}>
                <Input type="text" onChange={handleChoiceCategory}  placeholder="categoryInput"/>
            </Col>
            <Col span={2}>
                <Input type="button" onClick={handleAddCategory} value='Add category' />
            </Col>
        </Row>
        <Row>
            <Col span={16}>
                <Input type="text" onChange={handleChoiceTask} value={task} placeholder="taskInput"/>
            </Col>
            <Col span={4}>
                <Select onChange={handleChangeCategory}>
                    {/* <option value="Todo">Todo</option>
                    <option value="WIP">WIP</option>
                    <option value="Done">Done</option> */}
                    {
                        categoryList.map(item=>(<option value={item.name}>{item.name}</option>))
                    }
                </Select>
            </Col>
            <Col span={2}>
                <Input type="button" onClick={handleAddTask} value='Add task' />
            </Col>
        </Row>

        <table>
            <tr>
                {
                    todoTaskList.map(item=>(<th key={item}>{item}</th>))
                }
                <th>Todo</th>
                <th>WIP</th>
                <th>Done</th>
            </tr>
            <tr>
                <td>
                    <ul>
                        {
                            todoTaskList.map(item=>(<tr key={item}><td>{item}</td><td><Button>Delete</Button></td></tr>))
                        }
                    </ul>
                </td>
                <td>
                    <ul>
                        {
                            wipTaskList.map(item=>(<tr key={item}><td>{item}</td><td><Button>Delete</Button></td></tr>))
                        }
                    </ul>
                </td>
                <td>
                    <ul>
                        {
                            doneTaskList.map(item=>(<tr key={item}><td>{item}</td><td><Button>Delete</Button></td></tr>))
                        }
                    </ul>
                </td>
            </tr>
        </table>
    </>

};

export default TodoListBasic;


  