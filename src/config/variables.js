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

  /**
   * Font size
   */
  get baseFontSize () {
    return this.scale(14)
  },

  get smallFontSize () {
    return this.scale(12)
  },

  get mediumFontSize () {
    return this.scale(16)
  },

  get largeFontSize () {
    return this.scale(24)
  },

  /**
   * Colors
   */
  get baseBackgroundColor () {
    return '#FFFFFF'
  },

  get titleColor () {
    return '#3333'
  },

  get white () {
    return '#FFFFFF'
  },

  get gray () {
    return '#999'
  },

  get transparent () {
    return 'transparent'
  },

  get black () {
    return '#333333'
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
