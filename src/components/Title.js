import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

import variables from '../config/variables'

Title.propTypes = {
  children: PropTypes.string.isRequired
}

function Title (props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text} numberOfLines={1}>
        {props.children}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: variables.titleColor,
    fontWeight: '500',
    fontSize: variables.scale(18)
  }
})

export default Title
