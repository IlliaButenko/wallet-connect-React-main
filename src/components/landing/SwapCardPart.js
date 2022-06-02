import React, { useState, useRef } from "react";
import { Modal } from "react-bootstrap";
import { useEffect } from "react";
import styled from "styled-components";

//import image
import coinbaseIcon from "../../assets/coinbase.png";
import metamaskIcon from "../../assets/matamask.png";
import walletconnectIcon from "../../assets/walletconnect.png";
import coin98Icon from "../../assets/coin98.png";
import FortmaticIcon from "../../assets/fortmatic.png";
import MathwalletIcon from "../../assets/mathwallet.png";
import binanceIcon from "../../assets/binance.png";
import { Spinner } from "react-bootstrap";

//import contract
import {
  contract_address,
  usdt_address,
  busd_address,
} from "../../contract/address";
import { useEthContext } from "../../context/EthereumContext";
import { travelABI, usdtABI, busdABI } from "../../contract/abi";

//import assets
import InputField from "../../components/custom/InputField";
import CryptoSelect from "../../components/custom/CryptoSelect";
import {
  BuyBtn,
  FormGroup,
  SwapCardPartDiv,
  CardTitle,
  MainText,
} from "./StyledLanding";

//import wallet connect module
import { useWallet } from "@binance-chain/bsc-use-wallet";
import { ethers } from "ethers";

const SwapCardPart = () => {
  const [cntBNB, setCntBNB] = useState(0);
  const [travelBNB, setTravlBNB] = useState(0);
  const [crypto, setCrypto] = useState("bnb");
  const [modalShow, setModalShow] = useState(false);
  const [active, setActive] = useState(true);
  const wallet = useWallet();
  const bnbInput = useRef(null);

  const { currentAcc, provider, setCurrentAcc } = useEthContext();

  const MyVerticallyCenteredModal = (props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Connect to a wallet
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Block>
            <Button
              onClick={async () => {
                setModalShow(false);
                await wallet.connect();
              }}
            >
              Metamask Connect
            </Button>
            <img src={metamaskIcon} style={{ width: 35, height: 35 }}></img>
          </Block>

          <Block>
            <Button
              onClick={() => {
                setModalShow(false);
                wallet.connect("bsc");
              }}
            >
              Binance Connect
            </Button>
            <img src={binanceIcon} style={{ width: 35, height: 35 }}></img>
          </Block>
          <Block>
            <Button
              onClick={() => {
                setModalShow(false);
                wallet.connect("walletconnect");
              }}
            >
              Walletconnect Connect
            </Button>
            <img
              src={walletconnectIcon}
              style={{ width: 35, height: 35 }}
            ></img>
          </Block>

          <Block>
            <Button
              onClick={() => {
                setModalShow(false);
                wallet.connect("walletlink");
              }}
            >
              Coinbase Connect
            </Button>
            <img src={coinbaseIcon} style={{ width: 35, height: 35 }}></img>
          </Block>

          <Block>
            <Button
              onClick={() => {
                setModalShow(false);
                wallet.connect("fortmatic");
              }}
            >
              Fortmatic Connect
            </Button>
            <img src={FortmaticIcon} style={{ width: 35, height: 35 }}></img>
          </Block>

          <Block>
            <Button
              onClick={() => {
                setModalShow(false);
                wallet.connect();
              }}
            >
              Coin98Wallet Connect
            </Button>
            <img src={coin98Icon} style={{ width: 35, height: 35 }}></img>
          </Block>

          <Block>
            <Button
              onClick={() => {
                setModalShow(false);
                wallet.connect();
              }}
            >
              MathWallet Connect
            </Button>
            <img src={MathwalletIcon} style={{ width: 35, height: 35 }}></img>
          </Block>
        </Modal.Body>
      </Modal>
    );
  };

  const handleChange = (e) => {
    if (e.target.value >= 0 && !isNaN(cntBNB)) {
      if (e.target.name === "from") {
        if (crypto === "bnb") {
          setCntBNB(e.target.value);
          setTravlBNB(e.target.value * 7692);
        } else {
          setCntBNB(e.target.value);
          setTravlBNB(((e.target.value * 0.08).toFixed(2) * 100) / 100);
        }
      } else if (e.target.name === "to") {
        setTravlBNB(e.target.value);
        setCntBNB(((e.target.value * 0.00013).toFixed(5) * 100000) / 100000);
      }
    } else {
      setCntBNB(0);
      setTravlBNB(0);
    }
  };

  const onBuy = async () => {
    setActive(false);
    try {
      const pv = new ethers.providers.Web3Provider(wallet.ethereum);
      const signer = pv.getSigner();
      const usdtContract = new ethers.Contract(usdt_address, usdtABI, signer);
      const usdtbalance = await usdtContract.balanceOf(currentAcc);
      const usdtbal = Number(ethers.utils.formatUnits(usdtbalance, 18));
      const busdContract = new ethers.Contract(busd_address, busdABI, signer);
      const busdbalance = await busdContract.balanceOf(currentAcc);
      const busdbal = Number(ethers.utils.formatUnits(busdbalance, 18));

      const contract = new ethers.Contract(contract_address, travelABI, signer);
      if (usdtbal < busdbal) {
        const tx = await busdContract.approve(contract_address, busdbalance);
        await tx.wait();
        await contract.buy(busd_address);
      } else {
        const tx = await usdtContract.approve(contract_address, usdtbalance);
        await tx.wait();
        await contract.buy(usdt_address);
      }
    } catch (error) {
      console.log("onBuy", error);
    }
    setActive(true);
  };

  useEffect(() => {
    console.log("wallet.status", wallet.status);

    if (wallet.status === "connected") {
      setCurrentAcc(wallet.account);
    }
  }, [wallet.status]);

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <SwapCardPartDiv>
        <CardTitle>BUY TOKEN</CardTitle>
        <FormGroup>
          <CryptoSelect
            value={cntBNB.toString()}
            onCryptoChange={handleChange}
            crypto={crypto}
            bnbInput={bnbInput}
            name="from"
            label="From"
            btn="BNB"
            placeholder="From"
          />

          <InputField
            value={travelBNB.toString()}
            onChange={handleChange}
            label="To"
            name="to"
            btn="NITROX"
            placeholder="Enter token balance."
          />
        </FormGroup>
        {currentAcc ? (
          active ? (
            <BuyBtn
              onClick={() => {
                onBuy();
              }}
            >
              Buy
            </BuyBtn>
          ) : (
            <Spinner animation="grow" />
          )
        ) : (
          <button
            type="button"
            className="btn btn-primary w-100"
            onClick={() => setModalShow(true)}
          >
            Wallet connect
          </button>
        )}
        <MainText>*IF YOU CLICK SWITCH, YOU AGREE TO THE TERMS OF USE</MainText>
      </SwapCardPartDiv>
    </>
  );
};
const Button = styled.div`
  /* Adapt the colors based on primary prop */
  color: ${(props) => (props.primary ? "white" : "##0000003b")};
  background-color: transparent;
  width: 80%;

  margin-block: 10px;
  font-size: 1em;
  padding: 0.25em 1em;
  border: none;
  color: white;
`;

const Block = styled.button`
  /* Adapt the colors based on primary prop */
  width: 100%;
  height: 60px;
  align-items: center;
  font-size: 1em;
  display: flex;
  background: black;
  border: 2px solid #00000045;
  border-radius: 10px;
  margin-block: 10px;
`;

export default SwapCardPart;
