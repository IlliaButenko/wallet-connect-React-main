import { createContext, useContext } from "react";
import * as Web3 from "web3";

export const EthereumContext = createContext({
  provider: [],
  accounts: [],
  Web3: Web3 ? Web3 : null,
  currentAcc: "",
});

export const useEthContext = () => useContext(EthereumContext);
