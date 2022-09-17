import React from "react";
import { StyledButton } from "../../styles/buttons";
import { StyledParagraph, StyledTag, StyledTitle } from "../../styles/typography";
import Charizard from "../../assets/Charizard.png"
import { StyledBanner } from "./style";

const MainBanner = () => {
  return (
    <StyledBanner>
      <div className="flexGrid">
        <div className="content">
          <StyledTag backgroundColor="red">RPG</StyledTag>  
          <StyledTitle tag="h1" fontWeight={400} fontSize="lg">Lorem Ipsum Pokéworld</StyledTitle>
          <div className="priceBox">
            <StyledParagraph fontSize="md" opacity={1}>
                <strong>R$ 299,00</strong>
            </StyledParagraph>
            <StyledButton buttonStyle="solid" buttonSize="lg">
                Comprar
            </StyledButton>
          </div>
        </div>
        <div className="imageGrid">
            <img src={Charizard} alt="Charizard" />
        </div>
      </div>
    </StyledBanner>
  );
};

export default MainBanner;
