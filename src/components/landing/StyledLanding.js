import styled from "styled-components";

export const LandingDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-image: linear-gradient(to bottom right, #31367c, #2d95b0);
`;

export const HeaderTextPartDiv = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
  width: 100%;
  margin: 50px 0 40px 0;
`;

export const HeaderTitleDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: 15px;
  padding: 0 50px;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
  @media screen and (max-width: 375px) {
    padding: 0 15px;
    flex-direction: column;
  }
`;

export const HeaderDescDiv = styled.div`
  font-size: 20px;
  text-align: center;
  width: 60%;
  transition: 0.2s linear;
  margin: auto;
  @media screen and (max-width: 1024px) {
    width: 80%;
    transition: 0.2s linear;
  }
  @media screen and (max-width: 768px) {
    font-size: 26px;
    transition: 0.2s linear;
  }
  @media screen and (max-width: 425px) {
    font-size: 22px;
    transition: 0.2s linear;
  }
`;

export const TravelBNBBtn = styled.div`
  cursor: pointer;
  border-radius: 39px;
  padding: 4px 7px;
  background-color: white;
  display: flex;
  width: 200px;
  justify-content: center;
  align-items: center;
  img {
    width: 200px;
    height: 50px;
    transition: 0.2s linear;
    /* height: ; */
  }
  transition: 0.2s linear;
  @media screen and (max-width: 768px) {
    img {
      width: 220px;
      height: 60px;
      transition: 0.2s linear;
    }
  }
  @media screen and (max-width: 600px) {
    max-width: 300px;
    width: 100%;
    transition: 0.2s linear;
  }
`;

export const HeaderTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 22px;
  font-size: 20px;
  color: white;
  .main_title {
    font-size: 25px;
    font-weight: 900;
    line-height: 42px;
  }
  .sub_title {
    font-size: 25px;
    font-weight: 900;
    line-height: 42px;
  }
`;

export const HeaderResponsiveTitle = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  grid-gap: 22px;
  color: #333333;
  width: 70%;
  margin: auto;
  .main_title {
    text-align: center;
    font-size: 28px;
    font-weight: 900;
    line-height: 42px;
  }
  .sub_title {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    line-height: 35px;
  }
  @media screen and (max-width: 1024px) {
    display: flex;
  }
  transition: 0.2s linear;
  @media screen and (max-width: 768px) {
    .main_title {
      font-size: 32px;
      transition: 0.2s linear;
    }
    .sub_title {
      font-size: 26px;
      transition: 0.2s linear;
    }
    transition: 0.2s linear;
  }
  @media screen and (max-width: 425px) {
    .main_title {
      font-size: 30px;
      transition: 0.2s linear;
    }
    .sub_title {
      font-size: 24px;
      transition: 0.2s linear;
    }
    transition: 0.2s linear;
  }
`;

export const ConnectWalletBtn = styled.div`
  max-width: 278px;
  height: 30px;
  width: 230px;
  cursor: pointer;
  color: white;
  font-size: 20px;
  img {
    width: 31px;
  }
  div {
    width: 30px;
    height: 30px;
    background-color: #ffffff50;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #efe1e1;
  padding: 12px 0;
  border-radius: 30px;
  grid-gap: 10px;
  background: linear-gradient(92.51deg, #f7931e -36.81%, #ffdd2b 118.97%);
  @media screen and (max-width: 768px) {
    img {
      width: 26px;
      transition: 0.2s linear;
    }
    div {
      width: 40px;
      height: 40px;
    }
    font-size: 20px;
  }
  @media screen and (max-width: 600px) {
    max-width: 300px;
    transition: 0.2s linear;
  }
`;
export const MainText = styled.span`
  text-align: center;
`;
export const SwapCardPartDiv = styled.div`
  max-width: 967px;
  width: 40%;
  padding: 10px 37px 20px 37px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(239, 239, 239, 0.4);
  border-radius: 20px;
  backdrop-filter: blur(80px);
  border: 1px solid #ffffff;
  margin-bottom: 37px;
  transition: 0.2s linear;
  @media screen and (max-width: 768px) {
    width: 70%;
  }
  @media screen and (max-width: 425px) {
    width: 90%;
    border-radius: 50px;
    padding: 30px 10px 30px 10px;
    transition: 0.2s linear;
  }
`;

export const CardTitle = styled.div`
  font-size: 25px;
  color: #000000;
  text-align: center;
  margin: 30px 0;
`;

export const FormGroup = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  grid-gap: 30px;
  /* & > *:not(:last-child) {
    margin-bottom: 35px;
  } */
  margin-bottom: 45px;
`;
export const MaxBtnView = styled.div`
  display: flex;
  justify-content: end;
`;
export const MaxBtn = styled.div`
  background-color: #eeeeee;
  width: 30px;
  padding: 10px;
  margin-right: 20px;
  cursor: pointer;
`;
export const BuyBtn = styled.div`
  color: black;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  img {
    width: 31px;
  }
  div {
    width: 50px;
    height: 50px;
    background-color: #ff914d;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  max-width: 220px;
  width: calc(100% - 50px);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid #efe1e1;
  padding: 10px 25px;
  border-radius: 10px;
  grid-gap: 30px;
  background: #ff914d;
  margin-bottom: 46px;
  transition: 0.2s linear;
  @media screen and (max-width: 768px) {
    transition: 0.2s linear;
    font-size: 20px;
  }
  @media screen and (max-width: 425px) {
    transition: 0.2s linear;
    font-size: 18px;
  }
`;

export const FooterPartDiv = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 19px;
  margin: auto;
  margin-top: 10px;
  div {
    font-size: 20px;
    text-align: center;

    word-break: break-all;
  }
  @media screen and (max-width: 768px) {
    div {
      font-size: 20px;
    }
  }
  @media screen and (max-width: 425px) {
    div {
      font-size: 20px;
    }
  }
`;

export const CopyBtn = styled.div`
  cursor: pointer;
  background-color: #fbfbfb;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: 12px;
  font-size: 20px !important;
  color: black !important;
  padding: 10px 20px;
  img {
    width: 20px;
  }
`;
export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const FooterAveText = styled.div`
  font-size: 25px;
  color: white;
  margin-bottom: 20px;
`;
export const FooterPercentText = styled.div`
  font-size: 15px;
  color: black;
  z-index: 1;
  position: absolute;
  left: 20px;
`;
export const FooterProgress = styled.div`
  width: 300px;
  height: 20px;
  background-color: #ff914d;
  border-radius: 50px;
  position: relative;
`;
export const FillProgress = styled.div`
  width: ${(props) => (props.width ? props.width + "%" : "0%")};
  height: 20px;
  background-color: #fff;
  border-radius: 50px;
  position: absolute;
  right: 0;
`;
export const FooterSupplyText = styled.div`
  font-size: 20px;
  color: white;
  margin: 20px 0;
`;
