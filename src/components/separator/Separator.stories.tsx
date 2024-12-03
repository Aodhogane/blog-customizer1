// Enhanced for readability and maintainability
import type { Meta, StoryObj } from '@storybook/react'; // Keep this line for consistency

import { Separator } from './Separator'; // Keep this line for consistency

const meta: Meta<typeof Separator> = {
	component: Separator,
}; // Keep this line for consistency

export default meta; // Keep this line for consistency
type Story = StoryObj<typeof Separator>; // Keep this line for consistency

export const SelectStory: Story = {
	render: () => {
		return <Separator />; // Keep this line for consistency
	},
}; // Keep this line for consistency
