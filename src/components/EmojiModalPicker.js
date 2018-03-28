import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Platform,
  Modal,
  FlatList,
  StyleSheet,
  Dimensions
} from 'react-native'

import { BlurView } from 'expo'

import {
  Emoji,
  NoResults,
  SearchBar,
  BackButton,
  Title
} from './'

import emojisWithCategories from '../helpers/emojisWithCategories'
import emojis from '../helpers/emojis'

import variables from '../config/variables'

class EmojiModalPicker extends React.Component {
  static propTypes = {
    show: PropTypes.bool,
    onSelect: PropTypes.func,
    onRequestToClose: PropTypes.func,
    searchBarPlaceholder: PropTypes.string
  }

  static defaultProps = {
    show: false,
    searchBarPlaceholder: 'Type to search'
  }

  state = {
    searchText: ''
  }

  get animationType () {
    return Platform.OS === 'ios' ? 'slide' : 'fade'
  }

  /**
   * callback after user update the search
   * @param { String } searchText
   * @return { Void }
   */
  _handleOnChangeSearch = (searchText) => {
    this.setState({ searchText })
  }

  _handleEmojiPress = (emoji) => {
    alert(emoji)
  }

  render () {
    return (
      // <Modal
      //   transparent
      //   animationType={this.animationType}
      //   visible={this.props.show}
      //   onRequestClose={this.props.onRequestClose}
      // >
      <View style={styles.container}>
        <BlurView tint="default" intensity={80} style={styles.inner}>
          <BackButton
            onPress={this.props.onRequestClose}
          />
          <SearchBar
            onChange={this._handleOnChangeSearch}
            value={this.state.searchText}
            placeholder={this.props.searchBarPlaceholder}
          />
          {this.state.searchText.length > 0 &&
            <View style={styles.searchListContainer}></View>
          }
          {this.state.searchText.length === 0 &&
            <View style={styles.listContainer}>
              <FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.list}
                data={emojis}
                numColumns={4}
                keyExtractor={item => item}
                renderItem={({ item }) =>
                  <Emoji
                    name={item}
                    onPress={this._handleEmojiPress.bind(this, item)}
                  />
                }
              />
            </View>
          }
        </BlurView>
      </View>
      // </Modal>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    flex: 1,
    backgroundColor: 'rgba(160, 139, 118, 0.9)'
  },
  inner: {
    flex: 1,
    padding: variables.gutter
  },
  list: {
    justifyContent: 'space-between'
  }
})

export default EmojiModalPicker
