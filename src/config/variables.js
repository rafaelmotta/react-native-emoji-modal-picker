import {
  Platform
} from 'react-native'

import {
  scale
} from '../helpers/scalling'

import {
  width,
  height
} from '../helpers/dimensions'

export default {
  scale: size => {
    return scale(size)
  },

  get titleColor () {
    return '#FFFFFF'
  },

  get screenGutter () {
    return this.scale(8)
  },

  get gutter () {
    return this.scale(15)
  },

  /**
   * Search
   */
  get inputPlaceholderColor () {
    return '#999999'
  },

  get inputBorderRadius () {
    return this.scale(Platform.OS === 'ios' ? 25 : 2)
  },

  /**
   * Screen
   */
  get screenWidth () {
    return width
  },

  get screenHeight () {
    return height
  }
}
