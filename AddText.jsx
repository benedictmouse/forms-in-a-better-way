
import React, { useState } from 'react'

const AddText = () => {
    const [text, setText] = useState('hello');
    const [age, setAge] = useState("0");

    function handleChange(e) {
        const { name, value } = e.target;
        if (name === "text") {
            setText(value);
        } else if (name === "age") {
            setAge(value);
        }
    }

    return (
        <>
            <input
                type="text"
                name="text"
                value={text}
                onChange={handleChange}
            />
            <input
                type="number"
                name="age"
                value={age}
                onChange={handleChange}
            />
            <p>My name is: {text}</p>
            <p>My name is {text} and I am {age} years old</p>
        </>
    );
}

export default AddText;
