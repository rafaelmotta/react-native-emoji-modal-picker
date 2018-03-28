import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

Title.propTypes = {
  children: PropTypes.string.isRequired
}

function Title (props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text} numberOfLines={1}>
        {props.children}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  text: {}
})

export default Title
