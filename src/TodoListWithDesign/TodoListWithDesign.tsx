import React, { useState  } from 'react';
import './TodoListWithDesign.css';
import { Input, Button, Row, Col, Select} from 'antd';
// import bcrypt from 'bcrypt';

const TodoListBasic = () => {
    
    const [task, setTask] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [newCategory, setNewCategory] = useState<string>('');
    const [categoryList, setCategoryList] = useState<Category[]>([]);
    const [taskList, setTaskList] = useState<Task[]>([]);




    interface Task {
		id: string;
		name: string;
		categoryId: string;
	}

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
        setTaskList([...taskList, {
			id: generateId(),
			name: task,
			categoryId: newCategory
		}]);
        // console.log('tache ajoutée : ' + task + 'pour la categorie : ' + newCategory)

        {
            taskList.forEach(element => {
                if(element.categoryId === newCategory){
                    
                }
            })
        };
    }

    const handleAddCategory = () => {
        // console.log({newCategory});
        if (newCategory.length > 0) {
			const id =  generateId();
			setCategoryList([...categoryList, { id: id, name: newCategory }]);
		}
    }

    
    const generateId = () => {
        const date = new Date().getTime().toString();
        // console.log({date});
        // const salt = await bcrypt.genSalt();
        // const hash = await bcrypt.hash(date, salt);
        // return hash;
        return date;
    };


    const handleDeleteItem = (deleteTaskId: string) => {
		setTaskList(taskList.filter((task) => task.id !== deleteTaskId))
	}



    return <>
        <Row>
            <Col span={20}>
                <Input type="text" onChange={handleChoiceCategory} value={newCategory} placeholder="categoryInput"/>
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
                    {
                        categoryList.map(item=>(<Select.Option value={item.name}>{item.name}</Select.Option>))
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
                    categoryList.map(item=>(<th key={item.id}>{item.name}</th>))
                }
            </tr>
            <tr>
                {
                    categoryList.map(categ => (
                        <td key={categ.id}>
                            <ul>
                                {
                                    taskList.map(task => {
                                        if (task.categoryId === categ.name) {
                                            return (
                                                <tr key={task.name}>
                                                    <td>{task.name}</td>
                                                    <td><Button danger type="primary" onClick={() => handleDeleteItem(task.id)}>Delete</Button></td>
                                                </tr>
                                            );
                                        }
                                        return null;
                                    })
                                }
                            </ul>
                        </td>
                    ))
                }
            </tr>
        </table>
    </>

};

export default TodoListBasic;