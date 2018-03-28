import React from 'react'
import {
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  View,
  Image
} from 'react-native'

import {
  EmojiModalPicker
} from './src/components'

export default class App extends React.Component {
  state = {
    show: false
  }

  toggleModal = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }))
  }

  handleSelect = (emoji) => {
    alert(emoji)
  }

  onRequestClose = () => {
    this.setState({ show: false })
  }

  render () {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.toggleModal}>
          <Image
            style={styles.img}
            source={{uri: 'https://s3.amazonaws.com/rafaelmotta021/oi.jpeg'}}
          />
        </TouchableWithoutFeedback>
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
  }
})
