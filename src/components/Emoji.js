import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native'

import emoji from 'node-emoji'
import variables from '../config/variables'

class Emoji extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    onPress: PropTypes.func,
    style: Text.propTypes.style
  }

  shouldComponentUpdate () {
    return false
  }

  get emoji () {
    return emoji.get(this.props.name)
  }

  render () {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.props.onPress}>
          <View>
            <Text style={[styles.emoji, this.props.style]}>{this.emoji}</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginRight: variables.scale(20)
  },
  emoji: {
    fontSize: variables.scale(60)
  }
})

export default Emoji
