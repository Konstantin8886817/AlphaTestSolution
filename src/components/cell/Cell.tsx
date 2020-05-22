import React from "react";

export default (props: CellProps) => {
  return (
    <div
      style={{
        width: `${500 / props.size}px`,
        height: `${500 / props.size}px`,
      }}
      className={props.isAlive ? "cell-live" : "cell-death"}
      onClick={() => props.clickHandler(props.index)}
    ></div>
  );
};

export interface CellProps {
  isAlive: boolean;
  index: number;
  clickHandler: (index: number) => void;
  size: number;
}
