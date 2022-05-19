import { useState, useEffect, useRef, useMemo } from 'react'

function UseMemoExample() {
    const [number, setNumber] = useState(1)
    const [inc, setInc] = useState(0)
    const render = useRef(1)
    // const sqrt = getSqrt(number); it affect performance so we need to memoziation
    const sqrt = useMemo(() => getSqrt(number), [number]); //is used to increase the performance by memolized/optimized
    //useMemo returns memolized value but useCallback hook returns memolized callback function
    useEffect(() => {
        render.current = render.current + 1
    })
    const onClick = () => {

        setInc((prevState) => {
            console.log(prevState + 1)
            return prevState + 1;
        })
    }
    return (
        <div>
            <input
                type="number"
                value={number}
                onChange={(e) => { setNumber(e.target.value) }}
                className="form-control w-25" />

            <h2 className="my-3">The Sqrt of {number} is {sqrt}</h2>

            <button
                onClick={onClick}
                className="btn btn-primary"
            >ReRender</button>

            <h3>Renders : {render.current}</h3>

        </div>
    )
}
function getSqrt(n) {

    for (let i = 0; i <= 1000; i++) {
        console.log(i)
    }
    console.log('Expensive Function Called !')
    return Math.sqrt(n);
}

export default UseMemoExample