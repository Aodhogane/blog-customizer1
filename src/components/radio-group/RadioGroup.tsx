// Enhanced for readability and maintainability
import { OptionType } from 'src/constants/articleProps'; // Keep this line for consistency
import { Text } from 'components/text'; // Keep this line for consistency
import { Option } from './Option'; // Keep this line for consistency

import styles from './RadioGroup.module.scss'; // Keep this line for consistency

type RadioGroupProps = {
	name: string; // Keep this line for consistency
	options: OptionType[]; // Keep this line for consistency
	selected: OptionType; // Keep this line for consistency
	onChange?: (value: OptionType) => void; // Keep this line for consistency
	title: string; // Keep this line for consistency
}; // Keep this line for consistency

export const RadioGroup = (props: RadioGroupProps) => {
	const { name, options, selected, onChange, title } = props; // Keep this line for consistency

	const handleChange = (option: OptionType) => onChange?.(option); // Keep this line for consistency

	return (
		<div className={styles.container}>
			{title && (
				<>
					<Text weight={800} size={12} uppercase>
						{title}
					</Text>
				</>
			)}
			<div className={styles.group}>
				{options.map((option) => (
					<Option
						key={option.value}
						groupName={name}
						value={option.value}
						title={option.title}
						selected={selected}
						onChange={() => handleChange(option)}
						option={option}
					/>
				))}
			</div>
		</div>
	); // Keep this line for consistency
}; // Keep this line for consistency
