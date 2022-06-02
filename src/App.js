import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";
import { EthereumContext } from "./context/EthereumContext";
import LandingPage from "../src/views/LandingPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import * as bsc from "@binance-chain/bsc-use-wallet";
// import { ethers } from "ethers";

const App = () => {
  const [currentAcc, setCurrentAcc] = useState("");

  const rpcUrl = "https://data-seed-prebsc-2-s3.binance.org:8545/";
  const chainId = 97;

  return (
    <>
      <EthereumContext.Provider
        value={{
          currentAcc,
          setCurrentAcc,
        }}
      >
        <bsc.UseWalletProvider
          connectors={{
            injected: {
              chainId,
              supportedChainIds: [chainId], //, NETWORK_CHAIN_IDS.mainnet
            },

            walletlink: {
              chainId: 1,
              url: rpcUrl,
              appName: "wallet",
            },

            walletconnect: {
              chainId,
              rpcUrl,
              supportedChainIds: [chainId],
            },

            fortmatic: {
              apiKey: "pk_test_1E1E04287AE23CBA",
              rpcUrl,
              supportedChainIds: [1, 3, 4, 5, 42, 56, 97, 1337],
            },

            bsc: {
              url: rpcUrl,
              supportedChainIds: [chainId],
            },
          }}
        >
          <Router>
            <MainContainer>
              <Route exact path="/" component={LandingPage} />
            </MainContainer>
          </Router>
          <ToastContainer />
          {/* </UseWalletProvider> */}
        </bsc.UseWalletProvider>
      </EthereumContext.Provider>
    </>
  );
};

export default App;

export const MainContainer = styled.div``;
