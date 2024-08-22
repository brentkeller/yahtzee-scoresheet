export interface IInputProps {
  value?: number;
  fieldName: string;
  setValue: Function;
  fixedValue?: number;
  validValues?: Set<number>;
}
