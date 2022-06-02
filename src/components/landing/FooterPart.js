import React, { useState, useEffect } from "react";
import {
  FooterContainer,
  FooterAveText,
  FooterProgress,
  FooterSupplyText,
  FooterPercentText,
  FillProgress,
} from "./StyledLanding";
import { NoxABI } from "../../contract/abi";
import { contract_nox, contract_address } from "../../contract/address";
import { useEthContext } from "../../context/EthereumContext";
import { toast } from "react-toastify";
const FooterPart = () => {
  const [balance, setBalance] = useState(0);
  const { web3 } = useEthContext();
  useEffect(() => {
    if (web3) {
      const contract = new web3.eth.Contract(NoxABI, contract_nox);
      const interval = setInterval(async () => {
        await contract.methods
          .balanceOf(contract_address)
          .call()
          .then((res) => {
            setBalance(Number(res / 10 ** 18).toFixed(3));
          })
          .catch((err) => {
            toast.error(err, { theme: "dark" });
          });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [web3]);
  return (
    <FooterContainer>
      <FooterAveText>SUPPLY AVAILABLE:</FooterAveText>
      {balance > 0 && (
        <>
          <FooterProgress>
            <FooterPercentText>
              {Number(
                100 - (Number(balance / 100000).toFixed(2) * 100) / 100
              ).toFixed(2)}
              %
            </FooterPercentText>

            <FillProgress
              width={(Number(balance / 100000).toFixed(2) * 100) / 100}
            />
          </FooterProgress>
          <FooterSupplyText>
            {(Number(balance / 100000).toFixed(2) * 100) / 100}% LEFT /{" "}
            {balance} Token
          </FooterSupplyText>
        </>
      )}
    </FooterContainer>
  );
};
export default FooterPart;
