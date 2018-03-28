import React from 'react'
import PropTypes from 'prop-types'

import {
  View,
  TextInput,
  StyleSheet
} from 'react-native'

import variables from '../config/variables'

class SearchBar extends React.Component {
  static propTypes = {
    value: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  }

  _handleRef = (ref) => {
    this.inputRef = ref
  }

  /**
   * @description remove focus of the text input
   * @return { Void }
   */
  blur = () => {
    this.inputRef.blur()
  }

  render () {
    return (
      <View style={styles.container}>
        <TextInput
          ref={this._handleRef}
          style={styles.input}
          underlineColorAndroid="transparent"
          value={this.props.value}
          placeholder={this.props.placeholder}
          placeholderTextColor={variables.inputPlaceholderColor}
          onChangeText={this.props.onChange}
          multiline={false}
          blurOnSubmit={true}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: variables.screenGutter * 2,
    width: variables.screenWidth - (variables.screenGutter * 4),
    top: variables.scale(55),
    zIndex: 200
  },
  input: {
    color: variables.inputPlaceholderColor,
    paddingHorizontal: variables.gutter,
    paddingRight: variables.gutter * 2,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    height: variables.scale(40),
    fontSize: variables.scale(17),
    borderRadius: variables.scale(25)
  }
})

export default SearchBar
