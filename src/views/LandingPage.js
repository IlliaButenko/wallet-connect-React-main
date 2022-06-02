import FooterPart from "../components/landing/FooterPart";
import HeaderTextPart from "../components/landing/HeaderTextPart";
import { LandingDiv } from "../components/landing/StyledLanding";
import SwapCardPart from "../components/landing/SwapCardPart";
import React from "react";

const LandingPage = () => {
  return (
    <LandingDiv>
      <HeaderTextPart />
      <SwapCardPart />
      <FooterPart />
    </LandingDiv>
  );
};

export default LandingPage;
