import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

export default function FunHook() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);

  useEffect(() => {
    localStorage.setItem('formData', count);
    document.title = ` ${count} times`;

  }, [count]);

  if (localStorage.getItem('isAuth') === 'false') {
    return <Redirect to={'/'} />;
  }

  return (
    <div>
				<p>You clicked {count} times</p>
				<p>You clicked {age} times</p>
				<p>You clicked {fruit} times</p>
				<p>You clicked {todos.map(item => item.text)} times</p>
				<button onClick={() => {
        setCount(count + 1);
        setAge(age - 2);
        setFruit('aaaaa');
        setTodos([{ text: 'hello' }]);
      }}>
						Click me
				</button>
		</div>
  );
}
