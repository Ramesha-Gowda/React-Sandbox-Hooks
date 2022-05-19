import { useState, useRef, useEffect } from 'react'

function UseRefExample2() {
    const [name, setName] = useState('');
    const renders = useRef(1);
    const previousName = useRef('');
    useEffect(() => {
        renders.current = renders.current + 1;
        previousName.current = name; //store previous name
    },[name]);


    return (
        <div>
            <h1>Renders : {renders.current}</h1>
            <h2>Previous Name State :{ previousName.current}</h2>
            <input
                onChange={(e) => setName(e.target.value)}
                type="text" value={name}
                className="form-control mb-3" />
        </div>
    )
}

export default UseRefExample2