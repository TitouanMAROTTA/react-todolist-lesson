import React, { useState  } from 'react';
import './TodoListBasic.css';

const TodoListBasic = () => {
    
    const [task, setTask] = useState<string>('');
    const [category, setCategory] = useState<string>('Todo');
    const [todoTaskList, setTodoTaskList] = useState<string[]>([]);
    const [wipTaskList, setWipTaskList] = useState<string[]>([]);
    const [doneTaskList, setDoneTaskList] = useState<string[]>([]);


    const handleChangeTask = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTask(e.target.value);
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


    return <>

        <input type="text" onChange={handleChangeTask} value={task}/>
        
        <select onChange={handleChangeCategory} value={category}>
            <option value="Todo">Todo</option>
            <option value="WIP">WIP</option>
            <option value="Done">Done</option>
        </select>

        <input type="button" onClick={handleAddTask} value='Add to list' />

        <table>
            <tr>
                <th>Todo</th>
                <th>WIP</th>
                <th>Done</th>
            </tr>
            <tr>
                <td>
                    <ul>
                        {
                            todoTaskList.map(item=>(<tr key={item}><td>{item}</td></tr>))
                        }
                    </ul>
                </td>
                <td>
                    <ul>
                        {
                            wipTaskList.map(item=>(<tr key={item}><td>{item}</td></tr>))
                        }
                    </ul>
                </td>
                <td>
                    <ul>
                        {
                            doneTaskList.map(item=>(<tr key={item}><td>{item}</td></tr>))
                        }
                    </ul>
                </td>
            </tr>
        </table>
    </>

};

export default TodoListBasic;