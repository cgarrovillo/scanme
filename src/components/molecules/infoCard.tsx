import React from 'react'

import SmallCard from '../atoms/small.card'
import H2 from '../atoms/h2.text'
import P from '../atoms/p.text'

interface InfoCardProps {
  name: string
  value: string
}

const InfoCard = ({ name, value }: InfoCardProps) => {
  return (
    <SmallCard>
      <H2>{name}</H2>
      <P>{value}</P>
    </SmallCard>
  )
}

export default InfoCard
