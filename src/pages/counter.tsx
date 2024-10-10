import { useTheme } from '@/context/ThemeContext';
import React, { useState } from 'react';

const Counter = () => {
  const {theme} = useTheme()
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount((prevState)=>prevState + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div style={{ textAlign: 'center', paddingTop: '50px',height:'90vh', width: '100%', backgroundColor: theme === 'light' ? '#ffffff' : '#000000',
      color: theme === 'light' ? '#000000' : '#ffffff', }}>
      <h1>Simple Counter</h1>
      <p style={{ fontSize: '24px' }}>Current Count: {count}</p>
      <div>
        <button onClick={increment} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-2'>
          Increment
        </button>
        <button onClick={decrement} disabled={count <= 0} style={{cursor: count <= 0 ? 'not-allowed' :'pointer'}} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-2'>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
