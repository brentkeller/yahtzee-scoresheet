import React from "react";

interface IButton {
  onClick: () => void;
  children?: any;
}

export const Button: React.FC<IButton> = (props) => {
  return (
    <button onClick={props.onClick} className="btn">
      {props.children}
    </button>
  );
};
