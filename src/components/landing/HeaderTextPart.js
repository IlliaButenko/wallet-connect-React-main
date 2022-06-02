import React, { useState, useEffect } from "react";
import { useEthContext } from "../../context/EthereumContext";
import { NoxABI } from "../../contract/abi";
import { contract_nox } from "../../contract/address";
import {
  HeaderTextPartDiv,
  HeaderTitle,
  HeaderTitleDiv,
} from "./StyledLanding";
import { toast } from "react-toastify";
const HeaderTextPart = () => {
  const { currentAcc, web3 } = useEthContext();
  const [balance, setBalance] = useState(0);
  useEffect(() => {
    if (web3 && currentAcc) {
      const contract = new web3.eth.Contract(NoxABI, contract_nox);
      const interval = setInterval(async () => {
        await contract.methods
          .balanceOf(currentAcc)
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
  }, [web3, currentAcc]);
  return (
    <HeaderTextPartDiv>
      <HeaderTitleDiv>
        <HeaderTitle>
          {currentAcc && currentAcc ? (
            <>
              <div className="main_title"></div>{" "}
            </>
          ) : (
            <div className="main_title">Please connect your wallet.</div>
          )}
        </HeaderTitle>
      </HeaderTitleDiv>
    </HeaderTextPartDiv>
  );
};

export default HeaderTextPart;
