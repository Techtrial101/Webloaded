import { useState } from 'react';

const Toggle = () => {
  const [count, setCount] = useState('Click me');

  function handleClick() {
    setCount('Thank you for clicking me');
  }

  return (
    <div className="toggle">
      <button type="button" onClick={handleClick}>{count}</button>

    </div>
  );
};

export default Toggle;
