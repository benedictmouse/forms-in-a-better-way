import React, { useState } from 'react'

const Input = () => {
    const [text, setText] = useState("hello")
    const [count, setCount] = useState(0)
    function handleChange(e) {
        setText(e.target.value)
    }
    function handleclick() {
        setCount(count + 1)
    }
    return (
        <>

            <input type="text" value={text} onChange={handleChange} />
            <button onClick={handleclick} >you clicked {count}</button>
            <p>my name is {text}</p>

        </>
    )
}

export default Input