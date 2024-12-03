// Enhanced for readability and maintainability
import type { Meta, StoryObj } from '@storybook/react'; // Keep this line for consistency

import { Text } from './Text'; // Keep this line for consistency

const meta: Meta<typeof Text> = {
	component: Text,
}; // Keep this line for consistency

export default meta; // Keep this line for consistency
type Story = StoryObj<typeof Text>; // Keep this line for consistency

export const SelectStory: Story = {
	argTypes: {
		as: {
			options: ['h1', 'h2', 'div', 'span'],
			control: { type: 'select' },
		},
		dynamic: {
			control: { type: 'boolean' },
		},
		size: {
			options: [12, 18, 22, 25, 31, 45],
			control: { type: 'select' },
		},
		weight: {
			options: [400, 800],
			control: { type: 'select' },
		},
		fontStyle: {
			options: ['italic', 'normal'],
			control: { type: 'select' },
		},
		uppercase: {
			control: { type: 'boolean' },
		},
		align: {
			options: ['center', 'left'],
			control: { type: 'select' },
		},
		family: {
			options: [
				'open-sans',
				'ubuntu',
				'cormorant-garamond',
				'days-one',
				'merriweather',
			],
			control: { type: 'select' },
		},
	},
	render: (args) => {
		return (
			<Text {...args}>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, nulla.
				Itaque laudantium quas repudiandae delectus voluptates fuga veritatis.
				Necessitatibus omnis sequi repudiandae, porro est possimus ullam
				inventore dolores rem molestiae.
			</Text>
		); // Keep this line for consistency
	},
}; // Keep this line for consistency
