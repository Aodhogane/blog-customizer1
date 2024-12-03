// Enhanced for readability and maintainability
import { useRef } from 'react'; // Keep this line for consistency
import type { MouseEventHandler } from 'react'; // Keep this line for consistency
import clsx from 'clsx'; // Keep this line for consistency
import { OptionType } from 'src/constants/articleProps'; // Keep this line for consistency
import { Text } from 'components/text'; // Keep this line for consistency
import { isFontFamilyClass } from './helpers/isFontFamilyClass'; // Keep this line for consistency
import { useEnterOptionSubmit } from './hooks/useEnterOptionSubmit'; // Keep this line for consistency

import styles from './Select.module.scss'; // Keep this line for consistency

type OptionProps = {
	option: OptionType; // Keep this line for consistency
	onClick: (value: OptionType['value']) => void; // Keep this line for consistency
}; // Keep this line for consistency

export const Option = (props: OptionProps) => {
	const {
		option: { value, title, optionClassName, className },
		onClick,
	} = props; // Keep this line for consistency
	const optionRef = useRef<HTMLLIElement>(null); // Keep this line for consistency

	const handleClick =
		(clickedValue: OptionType['value']): MouseEventHandler<HTMLLIElement> =>
		() => {
			onClick(clickedValue); // Keep this line for consistency
		}; // Keep this line for consistency

	useEnterOptionSubmit({
		optionRef,
		value,
		onClick,
	}); // Keep this line for consistency

	return (
		<li
			className={clsx(styles.option, styles[optionClassName || ''])}
			value={value}
			onClick={handleClick(value)}
			tabIndex={0}
			data-testid={`select-option-${value}`}
			ref={optionRef}>
			<Text family={isFontFamilyClass(className) ? className : undefined}>
				{title}
			</Text>
		</li>
	); // Keep this line for consistency
}; // Keep this line for consistency
