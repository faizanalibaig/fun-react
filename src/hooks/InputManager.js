import { useState } from 'react';

export const InputManager = initialState => {
  const [value, setValue] = useState(initialState);

  function handleInput(e) {
    setValue(e.target.value);
  }

  const inputprops = {
    value: value,
    onChange: handleInput,
  };

  return inputprops;
};
