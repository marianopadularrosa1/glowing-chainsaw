import React, { useState, useEffect } from 'react';

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const [date, setDate] = useState(Date);
  useEffect(() => {}, [counter]);

  useEffect(() => {}, [date]);

  return (
    <>
      <h1> Contador </h1>
      <p>Clicks: {counter} </p>
      <p>Fecha: {date.toLocaleString()} </p>
      <button
        onClick={() => {
          setCounter(counter + 1);
          setDate(new Date());
        }}
      />
    </>
  );
}
