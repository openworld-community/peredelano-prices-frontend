import type { Meta, StoryObj } from "@storybook/react";

import Product from "./Product";

const meta: Meta<typeof Product> = {
  component: Product,
};

export default meta;

type Story = StoryObj<typeof Product>;

export const Primary: Story = {
  args: {
    data: {
      id: 1,
      name: "Testing story",
    },
  },
};
