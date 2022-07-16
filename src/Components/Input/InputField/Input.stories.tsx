import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Input } from './Input'

export default {
  title: 'Example/Inputs',
  component: Input,
  argTypes: {
    value: {
      control: 'text',
      defaultValue: 'Text',
    },
    fontSize: {
      control: { type: 'range', min: 1, max: 7, step: 1 },
      defaultValue: 4,
    },
    title: {
      control: 'text',
      defaultValue: 'Title',
    },
    fontSizeTitle: {
      control: { type: 'range', min: 1, max: 7, step: 1 },
      defaultValue: 6,
    },
    placeholder: {
      control: 'text',
      defaultValue: 'placeholder',
    },
    inputType: {
      options: ['text', 'date', 'range', 'number', 'color'],
      defaultValue: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    speedUpdate: {
      control: { type: 'range', min: 100, max: 2000, step: 100 },
      defaultValue: 500,
    },
    children: {
      table: {
        disable: true,
      },
    },
    name: {
      table: {
        disable: true,
      },
    },
    ref: {
      table: {
        disable: true,
      },
    },
    classWrap: {
      table: {
        disable: true,
      },
    },
    spread: {
      table: {
        disable: true,
      },
    },
    SubTitle: {
      table: {
        disable: true,
      },
    },

    required: {
      table: {
        disable: true,
      },
    },
    onChange: {
      table: {
        disable: true,
      },
    },
    onClickWrap: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const PreviewInput = Template.bind({})

PreviewInput.args = {}
