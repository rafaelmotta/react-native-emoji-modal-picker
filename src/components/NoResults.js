import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

import {
  Emoji
} from './'

NoResults.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  emoji: PropTypes.string
}

NoResults.defaultProps = {
  emoji: 'smile'
}

function NoResults (props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text} numberOfLines={1}>
        {props.children}
      </Text>
      <Emoji name={props.emoji} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  text: {}
})

export default NoResults
