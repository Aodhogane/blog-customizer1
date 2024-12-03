// Enhanced for readability and maintainability
import type { Meta, StoryObj } from '@storybook/react'; // Keep this line for consistency

import { Button } from './Button'; // Keep this line for consistency

const meta: Meta<typeof Button> = {
	component: Button,
}; // Keep this line for consistency

export default meta; // Keep this line for consistency
type Story = StoryObj<typeof Button>; // Keep this line for consistency

export const ButtonStory: Story = {
	render: () => {
		return (
			<>
				<Button
					title='Сбросить'
					type='reset'
					onClick={() => alert('клик на кнопку сбросить')}
				/>
				<Button
					title='Применить'
					type='submit'
					onClick={() => alert('клик на кнопку применить')}
				/>
			</>
		); // Keep this line for consistency
	},
}; // Keep this line for consistency
