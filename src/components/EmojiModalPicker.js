import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  StatusBar,
  Platform,
  Modal,
  FlatList,
  StyleSheet,
  Dimensions
} from 'react-native'

import { LinearGradient } from 'expo'

import emoji from 'node-emoji'

import {
  EmojiListItem,
  NoResults,
  SearchBar,
  BackButton
} from './'

import variables from '../config/variables'

class EmojiModalPicker extends React.Component {
  static propTypes = {

    /**
     * Indicates if show or hide the modal
     */
    show: PropTypes.bool,

    /**
     * Search bar placeholder text
     */
    searchBarPlaceholder: PropTypes.string,

    /**
     * Text to display when no results are found in the search
     */
    noResultsText: PropTypes.string,

    /**
     * Emoji name to display when no results are found in the search
     */
    noResultsEmoji: PropTypes.string,

    /**
     * Callback after user select an emoji
     */
    onSelect: PropTypes.func,

    /**
     * Modal onRequestClose callback
     */
    onRequestClose: PropTypes.func
  }

  static defaultProps = {
    show: false,
    searchBarPlaceholder: 'Type to search',
    noResultsText: 'No results for',
    noResultsEmoji: 'see_no_evil'
  }

  state = {
    searchText: '',
    emojis: emoji.search('')
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevProps.show !== this.props.show) {
      const timeout = this.props.show ? 0 : 250

      setTimeout(() => {
        StatusBar.setHidden(this.props.show, this.animationType)
      }, timeout)

      this._handleOnChangeSearch('')
    }
  }

  get animationType () {
    return Platform.OS === 'ios' ? 'slide' : 'fade'
  }

  _handleSearchBarRef = (ref) => {
    this.searchBarRef = ref
  }

  /**
   * @description callback after user update the search
   * @param { String } searchText
   * @return { Void }
   */
  _handleOnChangeSearch = (searchText) => {
    const search = searchText.toLowerCase()

    this.setState({
      searchText, emojis: emoji.search(search)
    })
  }

  /**
   * @description callback after choose one emoji
   * @param { String } emoji code
   * @return { Void }
   */
  _handleEmojiPress = (emoji) => {
    this.searchBarRef.blur()
    this.props.onSelect && this.props.onSelect(emoji)
  }

  render () {
    return (
      <Modal
        transparent
        animationType={this.animationType}
        visible={this.props.show}
        onRequestClose={this.props.onRequestClose}
      >
        <View style={styles.container}>
          <LinearGradient colors={['#333', 'transparent']} style={styles.shadow} />
          <BackButton
            onPress={this.props.onRequestClose}
          />
          <SearchBar
            ref={this._handleSearchBarRef}
            onChange={this._handleOnChangeSearch}
            value={this.state.searchText}
            placeholder={this.props.searchBarPlaceholder}
          />
          <View style={styles.listContainer}>
            <FlatList
              keyboardShouldPersistTaps="always"
              contentContainerStyle={styles.list}
              data={this.state.emojis}
              numColumns={4}
              keyExtractor={item => item.key}
              ListEmptyComponent={() => {
                if (this.state.emojis.length === 0) {
                  return (
                    <NoResults
                      title={this.props.noResultsText}
                      emoji={this.props.noResultsEmoji}
                    />
                  )
                }

                return null
              }}
              renderItem={({ item }) =>
                <EmojiListItem name={item.key} onPress={this._handleEmojiPress} />
              }
            />
          </View>
        </View>
      </Modal>
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
    backgroundColor: 'rgba(160, 139, 118, 0.95)'
  },
  shadow: {
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 100,
    width: variables.screenWidth,
    height: variables.scale(150)
  },
  listContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  list: {
    paddingTop: variables.gutter * 8
  }
})

export default EmojiModalPicker
