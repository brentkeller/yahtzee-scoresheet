import React from 'react';
import PropTypes from 'prop-types';

const InputCell: React.FC<{
  value?: number;
  fieldName: string;
  setValue: Function;
}> = ({ value, fieldName, setValue }) => {
  const changeValue = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(fieldName, +event.target.value);

  const displayValue = value ? value.toString() : '';

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
