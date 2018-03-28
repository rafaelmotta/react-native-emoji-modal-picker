import React from 'react'
import PropTypes from 'prop-types'

import {
  View,
  StyleSheet
} from 'react-native'

import {
  Emoji
} from './'

import variables from '../config/variables'

class EmojiListItem extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
  }

  shouldComponentUpdate () {
    return false
  }

  render () {
    return (
      <View style={styles.container}>
        <Emoji
          name={this.props.name}
          onPress={this.props.onPress.bind(this, this.props.name)}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: variables.screenWidth / 4,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default EmojiListItem
