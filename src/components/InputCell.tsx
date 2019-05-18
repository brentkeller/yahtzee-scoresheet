import React from "react";

export const InputCell: React.FC<{value?: number, fieldName:string, setValue: Function}> = 
({ value, fieldName, setValue }: any) => {
  const changeValue = (event: any) => setValue(fieldName, event.target.value);

  return (
    <div className="cell">
      <input type="number" value={value} onChange={changeValue} />
    </div>
  );
};
