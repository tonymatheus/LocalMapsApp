import { Container, InputStyled } from "./styles";

type InputProps = {
  label: string;
  name: string;
  value: string;
  onChange: Function;
};

export default function Input({
  label,
  name,
  value,
  onChange,
  ...rest
}: InputProps) {
  return (
    <Container>
      <label>{label}</label>
      <InputStyled
        required
        name={name}
        value={value}
        onChange={(ev) => {
          onChange((previousState: any) => ({
            ...previousState,
            [name]: ev.target.value,
          }));
        }}
      />
    </Container>
  );
}
