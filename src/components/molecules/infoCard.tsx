import React from 'react'
import { Text, StyleSheet } from 'react-native'

import SmallCard from '../atoms/small.card'

import { Colors, Fonts } from '../../styles'

interface InfoCardProps {
  name: string
  value: string
}

const InfoCard = ({ name, value }: InfoCardProps) => {
  return (
    <SmallCard>
      <Text style={styles.h3}>{name}</Text>
      <Text style={styles.p}>{value}</Text>
    </SmallCard>
  )
}

const styles = StyleSheet.create({
  h3: {
    ...Fonts.h3,
    color: Colors.dark,
  },
  p: {
    ...Fonts.p,
    color: Colors.dark,
  },
})

export default InfoCard
