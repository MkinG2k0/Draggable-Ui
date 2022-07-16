import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { WrapTheme } from './WrapTheme'

export default {
  title: 'Example/Theme',
  component: WrapTheme,
  argTypes: {
    colorBase: {
      control: { type: 'color', presetColors: ['#475284'] },
    },
    colorSecond: {
      control: { type: 'color', presetColors: ['#2d3251'] },
    },
    colorTriple: {
      control: {
        type: 'color',
        presetColors: ['#161625'],
        defaultValue: '#161625',
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof WrapTheme>

const Template: ComponentStory<typeof WrapTheme> = (args) => (
  <WrapTheme {...args} />
)

export const PreviewTheme = Template.bind({})

PreviewTheme.args = {}
