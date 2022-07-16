import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button } from './Button'

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    text: {
      control: 'text',
      defaultValue: 'Button',
      description: 'Text in Button',
    },
    type: {
      options: ['link', 'square', 'circle', 'smooth'],
      defaultValue: 'square',
      control: { type: 'radio' },
    },
    status: {
      options: ['primary', 'danger', 'success', 'warning', 'hover'],
      defaultValue: 'primary',
      control: { type: 'radio' },
    },
    liquid: {
      control: 'boolean',
    },
    fontSize: {
      control: { type: 'range', min: 1, max: 7, step: 1 },
      defaultValue: 1,
    },
    isDisable: {
      control: 'boolean',
    },
    typeBtn: {
      options: ['submit', 'reset', 'button'],
      defaultValue: 'button',
    },
    styleB: {
      control: 'text',
    },
    name: {
      control: 'text',
      table: {
        disable: true,
      },
    },
    classButton: {
      control: 'text',
      table: {
        disable: true,
      },
    },
    classText: {
      control: 'text',
      table: {
        disable: true,
      },
    },
    onClick: {
      table: {
        disable: true,
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
    After: {
      table: {
        disable: true,
      },
    },
    Before: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const PreviewButton = Template.bind({})

PreviewButton.args = {}
