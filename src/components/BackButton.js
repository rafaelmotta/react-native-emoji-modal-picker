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

import variables from '../config/variables'
import images from '../config/images'

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
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onPress}>
        <View style={styles.inner}>
          <Image
            source={{ uri: images.backButton }}
            style={styles.image}
          />
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: variables.screenGutter - variables.gutter,
    zIndex: 150
  },
  inner: {
    padding: variables.gutter
  },
  image: {
    height: variables.scale(24),
    width: variables.scale(24)
  }
})

export default BackButton
