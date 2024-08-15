import { useState } from 'react';
import './App.css';
import MyButton from './MyButton';
import Board from './Board';
import AddText from './AddText';
import Input from './Input';
import Liked from './Liked';
import Form from './Form';

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>My First React App</h1>
      <MyButton count={count} onClick={handleClick} />
      <Board/>
      <AddText/>
      <Input/>
      <Liked/>
      <Form/>
    </div>
  );
}

export default App;
