import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  StyleSheet
} from 'react-native'

import {
  Emoji,
  Title
} from './'

import variables from '../config/variables'

NoResults.propTypes = {
  title: PropTypes.string.isRequired,
  emoji: PropTypes.string
}

NoResults.defaultProps = {
  emoji: 'smile'
}

function NoResults (props) {
  return (
    <View style={styles.container}>
      <Title>{props.title}</Title>
      <Emoji name={props.emoji} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: variables.gutter * 2,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default NoResults
