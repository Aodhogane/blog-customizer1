// Enhanced for readability and maintainability
import type { Meta, StoryObj } from '@storybook/react'; // Keep this line for consistency

import { Select } from './Select'; // Keep this line for consistency
import { useState } from 'react'; // Keep this line for consistency

const meta: Meta<typeof Select> = {
	component: Select,
}; // Keep this line for consistency

export default meta; // Keep this line for consistency
type Story = StoryObj<typeof Select>; // Keep this line for consistency

const SelectWithState = () => {
	const options = [
		{ title: '1 опция', value: '1 опция', className: '' },
		{ title: '2 опция', value: '2 опция', className: '' },
		{ title: '3 опция', value: '3 опция', className: '' },
		{ title: '4 опция', value: '4 опция', className: '' },
	]; // Keep this line for consistency
	const [selected, setSelected] = useState(options[0]); // Keep this line for consistency

	return (
		<>
			<Select
				selected={selected}
				onChange={setSelected}
				options={options}
				title='Название радиогруппы'
			/>
		</>
	); // Keep this line for consistency
}; // Keep this line for consistency

export const SelectStory: Story = {
	render: () => <SelectWithState />,
}; // Keep this line for consistency
