import React from 'react';
import { InputManager } from '../hooks/InputManager';
import information from '../json/data.json';

const InputHook = () => {
  const data = InputManager('john smith');

  console.log(information);

  return (
    <section className="h-screen w-screen bg-slate-300 flex justify-center items-center">
      <div className="">
        <section className="text-5xl font-kodeMono flex items-center gap-2">
          <h1 className="font-semibold border border-black px-5 py-3 h-20">
            Name:{' '}
          </h1>
          <input
            type="text"
            {...data}
            className="bg-slate-300 px-5 py-3  border border-black h-20"
          />
        </section>
      </div>
    </section>
  );
};

export default InputHook;
