import React from 'react'
import { iGame } from '../../../data/database'
import { StyledParagraph, StyledTitle } from '../../../styles/typography';
import { StyledGameCard } from './style';

interface iGameCardProps{
    game: iGame;
}

const GameCard = ({game}: iGameCardProps) => {
  return (
    <StyledGameCard>
        <img src={game.image} alt={game.name} />
        <StyledTitle tag="h3" fontSize="md" fontWeight={700}>
            {game.name}
        </StyledTitle>
        <StyledParagraph fontSize="md">
            {game.category}
        </StyledParagraph>
    </StyledGameCard>   
  )
}

export default GameCard