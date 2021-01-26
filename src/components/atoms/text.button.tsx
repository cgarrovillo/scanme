import React from 'react'
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'

import { Colors, Fonts } from '../../styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    textAlign: 'center',
    color: Colors.dark,
    fontFamily: Fonts.TTCommonsDemiBold,
    fontSize: Fonts.sizes.p,
  },
})

interface Props extends TouchableOpacityProps {
  children: string
  rest?: any
}

const TextButton: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <TouchableOpacity {...rest}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  )
}

export default TextButton
