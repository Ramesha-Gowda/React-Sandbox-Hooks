import React, { useState, useCallback } from 'react'

function UseCallbackExample() {
    const [tasks, setTasks] = useState([]);

    const addTask = useCallback(() => {
        setTasks((prevState) =>[...prevState, 'Some task']
        );
    },[setTasks]); //button won't rendered multiple times to it optimize to increase the performance

    return (
        <div>
            <Button addTask={addTask} />
            {tasks.map((task, index) => {
                <p key={index}>{task}</p>
            })}
        </div>
    )
}

const Button = React.memo(({ addTask }) => {
    console.log('Button rendered')
    return (
        <div>
            <button className='btn btn-primary' onClick={addTask}>Add task</button>
        </div>
    )
})

export default UseCallbackExample