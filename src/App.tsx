import React, { useState, useEffect } from "react";
import { reset, next, clearArr } from "./utils";
import Cell from "./components/cell/Cell";
import Controller from "./components/controller/Controller";

function App() {
  const [state, setstate] = useState<State>({ arr: clearArr(50), size: 50 });
  const [isRunning, setruninng] = useState<boolean>(false);

  useEffect(() => {
    let interval: any = null;
    if (isRunning) {
      interval = setInterval(() => {
        setstate((s) => ({ ...s, arr: next(s.arr, s.size) }));
      }, 500);
    } else if (!isRunning) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const cellCkickHandler = (index: number): void => {
    let tmp = [...state.arr];
    tmp[index] = !tmp[index];
    setstate({ ...state, arr: tmp });
  };

  const generate = (size: number): void => {
    setstate({ arr: reset(size), size });
  };

  const clear = (): void => {
    setstate({ arr: clearArr(state.size), size: state.size });
  };

  const changeArrSize = (size: number): void => {
    setstate({ arr: clearArr(size), size });
  };

  const run = (): void => {
    if (!isRunning) {
      setruninng(true);
    }
  };

  const stop = (): void => {
    setruninng(false);
  };

  const genarateTest = (arr: boolean[], size: number): void => {
    setstate({ arr, size });
  };

  return (
    <>
      <Controller
        isRunning={isRunning}
        size={state.size}
        changeSize={changeArrSize}
        start={run}
        stop={stop}
        clear={clear}
        generate={() => generate(state.size)}
        generateTest={genarateTest}
      />
      <hr />
      <div className="area">
        {state.arr.map((v: boolean, index: number) => (
          <Cell
            key={index}
            isAlive={v}
            index={index}
            clickHandler={cellCkickHandler}
            size={state.size}
          />
        ))}
      </div>
    </>
  );
}

export default App;

interface State {
  arr: boolean[];
  size: number;
}
