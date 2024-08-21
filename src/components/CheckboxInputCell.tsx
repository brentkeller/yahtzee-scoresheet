import React from "react";
import PropTypes from "prop-types";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import { IInputProps } from "./interfaces";

export const CheckboxInputCell: React.FC<IInputProps> = ({
  value,
  fieldName,
  setValue,
  fixedValue,
}) => {
  const changeValue = () => {
    const newValue = value === fixedValue ? undefined : fixedValue;
    setValue(fieldName, newValue);
  };

  const getButton = () => {
    if (value === fixedValue) return <MdCheckBox onClick={changeValue} />;

    return <MdCheckBoxOutlineBlank onClick={changeValue} />;
  };

  return <div className="cell button-input-cell">{getButton()}</div>;
};

CheckboxInputCell.propTypes = {
  value: PropTypes.number,
  fieldName: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};
