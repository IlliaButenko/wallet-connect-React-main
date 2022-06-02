import styled from "styled-components";

export const InputFieldDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 0 5px 20px;
  background-color: white;
  border-radius: 10px;
  align-items: center;
  border: 4px solid grey;
`;

export const InputDiv = styled.div`
  height: 55px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(100% - 150px);
`;

export const BtnDiv = styled.div`
  width: 120px;
  height: 50px !important;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #868686;
  background-color: #eeeeee;

  height: 77px;
  transition: 0.2s linear;
  @media screen and (max-width: 768px) {
    font-size: 20px;
    width: 130px;
    transition: 0.2s linear;
  }
  @media screen and (max-width: 425px) {
    font-size: 18px;
    width: 100px;
    transition: 0.2s linear;
  }
`;

export const InputLabel = styled.div`
  color: #868686;
  font-size: 18px;
  transition: 0.2s linear;
  @media screen and (max-width: 768px) {
    font-size: 16px;
    transition: 0.2s linear;
  }
  @media screen and (max-width: 425px) {
    font-size: 14px;
    transition: 0.2s linear;
  }
`;

export const Input = styled.input`
  border: none;
  height: 100%;
  outline: none;
  font-size: 20px;

  ::placeholder {
    color: #ddd;
  }
  transition: 0.2s linear;
  @media screen and (max-width: 768px) {
    font-size: 20px;
    transition: 0.2s linear;
  }
  @media screen and (max-width: 425px) {
    font-size: 18px;
    transition: 0.2s linear;
  }
`;
export const CryptoDiv = styled.div`
  font-size: 20px;
  color: #868686;
  margin-left: 15px;
  transition: 0.2s linear;
  @media screen and (max-width: 768px) {
    font-size: 20px;
    transition: 0.2s linear;
  }
  @media screen and (max-width: 425px) {
    font-size: 18px;
    transition: 0.2s linear;
  }
`;
export const CryptoView = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
`;
export const CryptoLabelView = styled.div`
  display: flex;
  border-left: 4px solid grey;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 40px;
  height: 50px !important;
`;
export const CryptoSelectLabelView = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 40px;
  height: 50px !important;
`;
export const CryptoSelectView = styled.div`
  display: ${(props) => (props.visible ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: -160px;
  background-color: #fff;
  cursor: pointer;
`;
