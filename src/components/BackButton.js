import React from 'react'
import PropTypes from 'prop-types'

import {
  View,
  ViewPropTypes,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text
} from 'react-native'

import theme from '../config/theme'

BackButton.propTypes = {
  icon: PropTypes.string,
  style: ViewPropTypes.style,
  iconStyle: Text.propTypes.style,
  onPress: PropTypes.func.isRequired
}

BackButton.defaultProps = {
  style: {},
  iconStyle: {},
  icon: 'angle-left'
}

function BackButton (props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity onPress={props.onPress}>
        <Image></Image>
      </TouchableOpacity>
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: theme.gutter,
    left: 0,
    zIndex: 150
  },
  icon: {
    fontSize: theme.backButtonIconSize,
    backgroundColor: 'transparent'
  }
})

export default BackButton
