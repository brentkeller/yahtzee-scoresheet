import React from 'react';
import PropTypes from 'prop-types';

const InputCell: React.FC<{
  value?: number;
  fieldName: string;
  setValue: Function;
}> = ({ value, fieldName, setValue }) => {
  const changeValue = (event: any) => setValue(fieldName, +event.target.value);

  return (
    <div className="cell">
      <input type="number" value={value} onChange={changeValue} />
    </div>
  );
};

InputCell.propTypes = {
  value: PropTypes.number,
  fieldName: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};

export { InputCell };
