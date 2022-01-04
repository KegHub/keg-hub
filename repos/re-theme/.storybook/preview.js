import React from "react";
import { StoryWrap } from './storyWrap'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewMode: 'docs',
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <StoryWrap>
      <Story />
    </StoryWrap>
  ),
];