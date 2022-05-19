import { useRef } from 'react'

function UseRefExample1() {
    const inputRef = useRef();
    const paraRef =useRef();

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(inputRef) //gives complete object
        console.log(inputRef.current) //gives input element
        console.log(inputRef.current.value) //gives value of the element
        inputRef.current.value = 'Hello' //set value to input element
        inputRef.current.style.backgroundColor = 'red' //set style to the element
        paraRef.current.innerText='Good Bye !!' //changes innextext of the element

    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor="name" className="htmlfor">Name</label>
                <input
                    ref={inputRef}
                    type="text" name="name" id="name" className="form-control mb-2" />
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
                <p ref={paraRef} onClick={()=>inputRef.current.focus()}>Hello</p>
            </form>
        </div>
    )
}

export default UseRefExample1
