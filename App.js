import React from 'react'
import {
  StyleSheet,
  Dimensions,
  Button,
  View,
  Text
} from 'react-native'

import {
  Emoji,
  EmojiModalPicker
} from './src/components'

export default class App extends React.Component {
  state = {
    show: false,
    emoji: null
  }

  toggleModal = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }))
  }

  handleSelect = (emoji) => {
    this.setState({ show: false, emoji })
  }

  onRequestClose = () => {
    this.setState({ show: false })
  }

  render () {
    return (
      <View style={styles.container}>
        <View>
          {this.state.emoji && (
            <View style={styles.emojiContainer}>
              <Emoji name={this.state.emoji} />
              <Text style={styles.emojiNameText}>{this.state.emoji}</Text>
            </View>
          )}
          <Button title="Open" onPress={this.toggleModal} />
        </View>
        <EmojiModalPicker
          show={this.state.show}
          onSelect={this.handleSelect}
          onRequestClose={this.onRequestClose}
        />
      </View>
    )
  }
}

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width,
    height
  },
  emojiContainer: {
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  emojiNameText: {
    fontSize: 16,
    color: '#333'
  }
})
