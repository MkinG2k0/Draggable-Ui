import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Inputs } from './Inputs'

export default {
  title: 'Example/Inputs',
  component: Inputs,
} as ComponentMeta<typeof Inputs>

const Template: ComponentStory<typeof Inputs> = (args) => <Inputs {...args} />

export const PreviewInputs = Template.bind({})

PreviewInputs.args = {}
