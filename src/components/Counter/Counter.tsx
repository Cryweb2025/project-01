import { useState } from "react";

export default function Counter() {
  //   let counter = 0;
  const [counter, setCounter] = useState(0);

  // переменная состояния == state
  // функция setter - вызвывать ререндер компонента
  // Что нужно запомнить о каждом хук?
  // - что принимает? Начальное значение переменной состояния.
  // - что возвращает? Создает стейт, изменения которго вызывают ререндер

  function handleAddOne() {
    setCounter(counter + 1);
  }

  function handleMinusTwo() {
    // setCounter(counter -2);
    setCounter((prev) => prev - 2);
  }

  function handleResetCounter() {
    setCounter(0);
  }

  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={handleResetCounter}>
        Reset
      </button>

      <button type="button" onClick={handleAddOne}>
        +1
      </button>

      <button
        type="button"
        onClick={() => {
          setCounter((prev) => prev - 1);
        }}
      >
        -1
      </button>

      <button type="button" onClick={handleMinusTwo}>
        -2
      </button>
    </div>
  );
}
