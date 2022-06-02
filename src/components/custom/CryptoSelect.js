import React, { useState } from "react";
import { Input, InputDiv, InputFieldDiv } from "./StyledInput";

const CryptoSelect = ({
  value,
  placeholder,
  onCryptoChange,
  name,
  bnbInput,
}) => {
  const [visible, setVisible] = useState(false);
  const data = [
    {
      name: "bnb",
      label: "BNB",
    },
    {
      name: "usdt",
      label: "USDT",
    },
    {
      name: "busd",
      label: "BUSD",
    },
  ];
  return (
    <InputFieldDiv>
      <InputDiv>
        <Input
          type="number"
          value={value}
          placeholder={placeholder}
          onChange={onCryptoChange}
          name={name}
          min="0"
          ref={bnbInput}
        />
      </InputDiv>
    </InputFieldDiv>
  );
};

export default CryptoSelect;
