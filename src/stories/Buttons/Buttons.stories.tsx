import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Buttons } from './Buttons'

export default {
  title: 'Example/Button',
  component: Buttons,
} as ComponentMeta<typeof Buttons>

const Template: ComponentStory<typeof Buttons> = (args) => <Buttons {...args} />

export const PreviewButtons = Template.bind({})

PreviewButtons.args = {}
