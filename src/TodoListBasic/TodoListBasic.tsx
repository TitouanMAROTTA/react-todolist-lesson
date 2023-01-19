import React, { useState  } from 'react';

const TodoListBasic = () => {
    
    const [lastName, setLastName] = useState<string>('');
    const [firstName, setFirstName] = useState<string>('');
    const [age, setAge] = useState<number>();


    const handleChangeLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value)
    }

    const handleChangeFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value)
    }

    const handleChangeAge = (e: React.ChangeEvent<HTMLInputElement>) => {
        // setAge(e.target.value)
    }



    return <>
        <input type="text" onChange={handleChangeLastName} value={lastName}/>
        <input type="text" onChange={handleChangeFirstName} value={firstName}/>
        <input type="number" onChange={handleChangeAge} value={age}/>

        <div>{lastName}</div>
        <div>{firstName}</div>
        <div>{age}</div>
    </>

};

export default TodoListBasic;