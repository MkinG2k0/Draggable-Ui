import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ExampleSkelet } from './ExampleSkelet'

export default {
  title: 'Example/Skelet',
  component: ExampleSkelet,
} as ComponentMeta<typeof ExampleSkelet>

const Template: ComponentStory<typeof ExampleSkelet> = (args) => (
  <ExampleSkelet {...args} />
)

export const PreviewSkelet = Template.bind({})

PreviewSkelet.args = {}
