import React from "react";
import { Input, InputDiv, InputFieldDiv } from "./StyledInput";
const InputField = ({ value, placeholder, onChange, name }) => {
  return (
    <InputFieldDiv>
      <InputDiv>
        <Input
          type="number"
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          name={name}
          disabled
        />
      </InputDiv>
    </InputFieldDiv>
  );
};

export default InputField;
