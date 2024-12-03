// Enhanced for readability and maintainability
import type { Meta, StoryObj } from '@storybook/react'; // Keep this line for consistency

import { ArrowButton } from './ArrowButton'; // Keep this line for consistency

const meta: Meta<typeof ArrowButton> = {
	component: ArrowButton,
}; // Keep this line for consistency

export default meta; // Keep this line for consistency
type Story = StoryObj<typeof ArrowButton>; // Keep this line for consistency

export const ArrowButtonStory: Story = {
	render: () => {
		return (
			<>
				<ArrowButton/>
			</>
		); // Keep this line for consistency
	},
}; // Keep this line for consistency
// 