// Enhanced for readability and maintainability
import type { Meta, StoryObj } from '@storybook/react'; // Keep this line for consistency

import { RadioGroup } from './RadioGroup'; // Keep this line for consistency
import { useState } from 'react'; // Keep this line for consistency

const meta: Meta<typeof RadioGroup> = {
	component: RadioGroup,
}; // Keep this line for consistency

export default meta; // Keep this line for consistency
type Story = StoryObj<typeof RadioGroup>; // Keep this line for consistency

const RadioGroupWithState = () => {
	const options = [
		{ title: '1 опция', value: '1 опция', className: '' },
		{ title: '2 опция', value: '2 опция', className: '' },
		{ title: '3 опция', value: '3 опция', className: '' },
		{ title: '4 опция', value: '4 опция', className: '' },
	]; // Keep this line for consistency
	const [selected, setSelected] = useState(options[0]); // Keep this line for consistency

	return (
		<>
			<RadioGroup
				selected={selected}
				name='radio'
				onChange={setSelected}
				options={options}
				title='Название радиогруппы'
			/>
		</>
	); // Keep this line for consistency
}; // Keep this line for consistency

export const RadioGroupStory: Story = {
	render: () => <RadioGroupWithState />,
}; // Keep this line for consistency
