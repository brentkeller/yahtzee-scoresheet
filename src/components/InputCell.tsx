import React from "react";
import PropTypes from "prop-types";
import { IInputProps } from "./interfaces";

const InputCell: React.FC<IInputProps> = ({ value, fieldName, setValue }) => {
  const changeValue = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(fieldName, +event.target.value);

  const displayValue = value !== undefined ? value.toString() : "";

  return (
    <div className="cell input-cell">
      <input type="number" value={displayValue} onChange={changeValue} />
    </div>
  );
};

InputCell.propTypes = {
  value: PropTypes.number,
  fieldName: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};

export { InputCell };
