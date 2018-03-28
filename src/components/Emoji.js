import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  TouchableWithoutFeedback
} from 'react-native'

import emoji from 'node-emoji'

class Emoji extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.number,
    onPress: PropTypes.func
  }

  static defaultProps = {
    size: 60
  }

  get emoji () {
    return emoji.get(this.props.name)
  }

  render () {
    return (
      <View>
        <TouchableWithoutFeedback onPress={this.props.onPress}>
          <View>
            <Text style={{ fontSize: this.props.size }}>
              {this.emoji}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

export default Emoji
