# react-native-emoji-modal-picker

[![npm version](https://badge.fury.io/js/react-native-emoji-modal-picker.svg)](https://badge.fury.io/js/react-native-emoji-modal-picker)

A Emoji Modal Picker

⚠ This package is still in development. Suggestions are welcome :D

## Features

- [x] Search
- [x] Select emoji
- [ ] Save last emojis selected
- [ ] Props to customize the UI

## Demo

You can try on expo: https://exp.host/@rafaelmotta021/react-native-emoji-picker-demo

or just check the image bellow:

<p align="center">
<img src="https://raw.githubusercontent.com/rafaelmotta/react-native-emoji-modal-picker/master/demo.jpg" height="550" />
<img src="https://raw.githubusercontent.com/rafaelmotta/react-native-emoji-modal-picker/master/demo.gif" height="550" />
</p>

## Setup

`yarn add react-native-emoji-modal-picker`

or 

`npm install --save react-native-emoji-modal-picker`

## Usage

```javascript
import React from 'react'
import {
  StyleSheet,
  Button,
  View,
  Text
} from 'react-native'

import {
  Emoji,
  EmojiModalPicker
} from 'react-native-emoji-modal-picker'

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
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

```

## EmojiModalPicker Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| show | PropTypes.bool | false | Indicates if show or hide the modal |
| searchBarPlaceholder | PropTypes.string | 'Type to search' | Search bar placeholder text |
| noResultsText | PropTypes.string | 'No results for' | Search bar placeholder text |
| noResultsEmoji | PropTypes.string | 'see_no_evil' | Emoji name to display when no results are found in the search *|
| onSelect | PropTypes.func | null | Callback after select a emoji |
| onRequestClose | PropTypes.func | null | RN Modal onRequestClose callback |

## Emoji Props

| Name | Type| Default | Description |
| --- | --- | --- | --- |
| name | PropTypes.string | REQUIRED | Name of the emoji * |
| size | PropTypes.number | 60 | Size of the emoji |
| onPress | PropTypes.func | null | Touchable onPress callback |

 * We're using the library https://github.com/omnidan/node-emoji to get the emoji. They provide a lot of ways to declare the name of the emoji.
