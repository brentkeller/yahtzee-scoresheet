import React from "react";
import PropTypes from "prop-types";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import { IInputProps } from "./interfaces";

export const YahtzeeBonusInput: React.FC<IInputProps> = ({
  value,
  fieldName,
  setValue,
}) => {
  const changeValue = () => {
    const newValue = value === 1 ? undefined : 1;
    setValue(fieldName, newValue);
  };

  if (value === 1) return <MdCheckBox onClick={changeValue} />;

  return <MdCheckBoxOutlineBlank onClick={changeValue} />;
};

YahtzeeBonusInput.propTypes = {
  value: PropTypes.number,
  fieldName: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};
