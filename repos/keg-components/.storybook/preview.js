import React from 'react'
import { View } from 'KegView'
import { theme } from '../src/theme'
import { Dimensions, Platform } from 'react-native'
import { configureActions } from '@storybook/addon-actions'
import { addDecorator, addParameters } from '@storybook/react'
import { ReThemeProvider, setRNDimensions, setRNPlatform } from '@keg-hub/re-theme'
const componentsTheme = theme({})

const parsePart = (full, part) => {
  return !part || part.indexOf('@summary') === 0
    ? full
    : part.indexOf(`<br/>`) === -1
      ? part.indexOf(`@`) === 0
        ? `${full ? full + '<br/>' : full}${parsePart(part)}`
        : `${full}<br/>${part}`
      : `${full}${part}`
}

addParameters({
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    extractComponentDescription: (component, { notes }) => {
      if(component && component.__docgenInfo && component.__docgenInfo.description){
        const parsed = component.__docgenInfo.description.split('\n').reduce((full, part) => {
          const isCompName = component.__docgenInfo.displayName.toLowerCase().trim() === part.toLowerCase().trim()
          return isCompName || !part.trim() ? full : parsePart(full, part)
        }, '')
        return `${parsed}<br/>`
      }
      return notes
        ? typeof notes === 'string' ? notes : notes.markdown || notes.text
        : null
    },
  },
  options: {
    storySort: (a, b) => {
      const sectionA = a[1].id.split('-')[0]
      const sectionB = b[1].id.split('-')[0]

      return sectionA === 'welcome' || sectionB === 'welcome'
        ? sectionB === 'welcome' ? 1 : -1
        : sectionA === 'components' || sectionB === 'components'
          ? sectionB === 'components' ? -1 : 1
          : sectionA.localeCompare(sectionB)
    }
  }
})

configureActions({
  depth: 3,
  limit: 30,
})

const storyWrapStyles = { maxWidth: '80vw', margin: 'auto', marginTop: 30 }
addDecorator(storyFn => {
  const storyComp = storyFn()

  return (
    <ReThemeProvider theme={ componentsTheme } >
      { storyComp.type.noStoreWrap 
          ? storyComp
          : (
              <View style={storyWrapStyles}>
                { storyComp }
              </View>
            )
      }
    </ReThemeProvider>
  )
})

setRNPlatform(Platform)
setRNDimensions(Dimensions)


/**
 * This is a hack to hide the showCode button
 * No other way to do it that I could tell
 * It's not really needed, but does remove some confusion
 */
;(() => {
  const styleId = `story-book-style-override`
  let SBStyleSheet = document.head.querySelector(`#${styleId}`)
  if (SBStyleSheet) return SBStyleSheet

  SBStyleSheet = document.createElement('style')
  SBStyleSheet.id = styleId
  // Hide the show-code button as it doesn't give an good info
  SBStyleSheet.innerText = `button.docblock-code-toggle {display: none;}`
  document.head.append(SBStyleSheet)
})()

