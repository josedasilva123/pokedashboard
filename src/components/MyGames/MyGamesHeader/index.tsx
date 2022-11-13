import React from 'react'
import { MdArrowForward } from 'react-icons/md'
import { StyledIconLink } from '../../../styles/buttons'
import { StyledTitle } from '../../../styles/typography'
import { StyledMyGamesHeader } from './style'

const MyGamesHeader = () => {
  return (
    <StyledMyGamesHeader>
      <StyledTitle tag="h2" fontSize="slg" fontWeight={700}>
        Os mais jogados
      </StyledTitle>
      <StyledIconLink>
        <MdArrowForward size={30} />
      </StyledIconLink>
    </StyledMyGamesHeader>    
  )
}

export default MyGamesHeader