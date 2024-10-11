import React from 'react';
import { useStatus } from '../hooks/Status';

const Network = () => {
  const status = useStatus();

  return (
    <section className="h-screen w-screen bg-slate-300 flex justify-center items-center">
      <div className="">
        <section className="text-5xl font-kodeMono flex">
          <h1 className="font-semibold">network status: </h1>
          <button> {status ? ' online' : ' offline'}</button>
        </section>
      </div>
    </section>
  );
};

export default Network;
