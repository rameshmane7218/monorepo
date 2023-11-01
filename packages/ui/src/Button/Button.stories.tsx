import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./index";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Button>;

// Todo: Update default story
export const Primary: Story = {
  args: {
    children: "Button",
  },
};
/*
 * More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
 */

// Todo:

/*
 * Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
// Todo:
