import React from 'react'
import { myGameData } from '../../../data/database'
import MyGameCard from './MyGameCard'
import { StyledMyGamesList } from './style'

const MyGamesList = () => {
  return (
    <StyledMyGamesList>
        {myGameData.map(game => (
            <MyGameCard key={game.name} game={game} />
        ))}
    </StyledMyGamesList>
  )
}

export default MyGamesList