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

  get textColor () {
    return '#444444'
  },

  get subtitleColor () {
    return '#555555'
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

  get gutter () {
    return this.scale(15)
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
