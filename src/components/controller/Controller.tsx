import React from "react";
import { test1, test2, test3, test4 } from "../../utils";

export default (props: ControllerPros) => {
  return (
    <div className="controllers">
      <div className="size">
        <label>
          Size 4:{" "}
          <input
            disabled={props.isRunning}
            type="radio"
            name="size"
            id="size10"
            checked={props.size === 4}
            onChange={() => props.changeSize(4)}
          />
        </label>
        <label>
          Size 5:{" "}
          <input
            disabled={props.isRunning}
            type="radio"
            name="size"
            id="size20"
            checked={props.size === 5}
            onChange={() => props.changeSize(5)}
          />
        </label>
        <label>
          Size 6:{" "}
          <input
            disabled={props.isRunning}
            type="radio"
            name="size"
            id="size20"
            checked={props.size === 6}
            onChange={() => props.changeSize(6)}
          />
        </label>
        <label>
          Size 17:{" "}
          <input
            disabled={props.isRunning}
            type="radio"
            name="size"
            id="size20"
            checked={props.size === 17}
            onChange={() => props.changeSize(17)}
          />
        </label>
        <label>
          Size 50:{" "}
          <input
            disabled={props.isRunning}
            type="radio"
            name="size"
            id="size50"
            checked={props.size === 50}
            onChange={() => props.changeSize(50)}
          />
        </label>
      </div>
      <div className="buttons">
        <button
          disabled={props.isRunning}
          onClick={props.start}
          className="btn btn-success"
        >
          start
        </button>
        <button
          disabled={!props.isRunning}
          onClick={props.stop}
          className="btn btn-danger"
        >
          stop
        </button>
        <div className="clear">
          <button
            disabled={props.isRunning}
            onClick={props.clear}
            className="btn btn-warning"
          >
            clear
          </button>
          <button
            disabled={props.isRunning}
            onClick={props.generate}
            className="btn btn-accent"
          >
            generate
          </button>
        </div>
        <div className="tests">
          <button
            className="btn btn-primary"
            disabled={props.isRunning}
            onClick={() => props.generateTest(test1(), 4)}
          >
            Test1
          </button>
          <button
            className="btn btn-primary"
            disabled={props.isRunning}
            onClick={() => props.generateTest(test2(), 5)}
          >
            Test2
          </button>
          <button
            className="btn btn-primary"
            disabled={props.isRunning}
            onClick={() => props.generateTest(test3(), 5)}
          >
            Test3
          </button>
          <button
            className="btn btn-primary"
            disabled={props.isRunning}
            onClick={() => props.generateTest(test4(), 17)}
          >
            Test4
          </button>
        </div>
      </div>
    </div>
  );
};

export interface ControllerPros {
  changeSize: (size: number) => void;
  start: () => void;
  stop: () => void;
  generate: () => void;
  clear: () => void;
  generateTest: (arr: boolean[], size: number) => void;
  isRunning: boolean;
  size: number;
}
