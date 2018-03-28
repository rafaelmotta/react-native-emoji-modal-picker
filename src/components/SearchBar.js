import React from 'react'
import PropTypes from 'prop-types'

import {
  View,
  TextInput,
  StyleSheet
} from 'react-native'

import variables from '../config/variables'

SearchBar.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

function SearchBar (props) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        clearButtonMode="always"
        underlineColorAndroid="transparent"
        value={props.value}
        onChangeText={props.onChange}
        multiline={false}
        blurOnSubmit={true}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: variables.gutter * 2,
    paddingBottom: variables.gutter
  },
  input: {
    paddingHorizontal: variables.gutter,
    paddingRight: variables.gutter * 2,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    height: variables.scale(40),
    fontSize: variables.scale(17),
    borderRadius: variables.scale(25)
  }
})

export default SearchBar
