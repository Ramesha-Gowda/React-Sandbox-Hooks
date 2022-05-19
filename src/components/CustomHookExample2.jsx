import useLocalStorage from "../hooks/useLocalStorage";

function CustomHookExample2() {
    const [task, setTask] = useLocalStorage('task', '');
    const [tasks, setTasks] = useLocalStorage('tasks', []);

    const onSubmit = (e) => {
        e.preventDefault();

        const taskObj = {
            task,
            completed: false,
            date: new Date().toLocaleDateString()
        }

        setTasks([...tasks, taskObj])
    }
    return (
        <>
            <form className='w-25' onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="label" className="form-label">
                        Task
                    </label>
                    <input type="text"
                        value={task}
                        onChange={(e) => setTask(e.target.value)} />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
            <hr/>
            {
                tasks.map((task)=>(
                    <h3 key={task.date}>{task.task}</h3>
                ))
            }
        </>
    )
}

export default CustomHookExample2