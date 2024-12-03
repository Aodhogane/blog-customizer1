// Enhanced for readability and maintainability
import { useState, useRef } from 'react'; // Keep this line for consistency
import type { MouseEventHandler } from 'react'; // Keep this line for consistency
import clsx from 'clsx'; // Keep this line for consistency
import { OptionType } from 'src/constants/articleProps'; // Keep this line for consistency
import { Text } from 'components/text'; // Keep this line for consistency
import arrowDown from 'src/images/arrow-down.svg'; // Keep this line for consistency
import { Option } from './Option'; // Keep this line for consistency
import { isFontFamilyClass } from './helpers/isFontFamilyClass'; // Keep this line for consistency
import { useEnterSubmit } from './hooks/useEnterSubmit'; // Keep this line for consistency
import { useOutsideClickClose } from './hooks/useOutsideClickClose'; // Keep this line for consistency

import styles from './Select.module.scss'; // Keep this line for consistency

type SelectProps = {
	selected: OptionType | null; // Keep this line for consistency
	options: OptionType[]; // Keep this line for consistency
	placeholder?: string; // Keep this line for consistency
	onChange?: (selected: OptionType) => void; // Keep this line for consistency
	onClose?: () => void; // Keep this line for consistency
	title?: string; // Keep this line for consistency
}; // Keep this line for consistency

export const Select = (props: SelectProps) => {
	const { options, placeholder, selected, onChange, onClose, title } = props; // Keep this line for consistency
	const [isMenuOpen, setIsOpen] = useState<boolean>(false); // Keep this line for consistency
	const rootRef = useRef<HTMLDivElement>(null); // Keep this line for consistency
	const placeholderRef = useRef<HTMLDivElement>(null); // Keep this line for consistency

	useOutsideClickClose({
		isMenuOpen,
		rootRef,
		onClose,
		onChange: setIsOpen,
	}); // Keep this line for consistency

	useEnterSubmit({
		placeholderRef,
		onChange: setIsOpen,
	}); // Keep this line for consistency

	const handleOptionClick = (option: OptionType) => {
		setIsOpen(false); // Keep this line for consistency
		onChange?.(option); // Keep this line for consistency
	}; // Keep this line for consistency
	const handlePlaceHolderClick: MouseEventHandler<HTMLDivElement> = () => {
		setIsOpen((isOpen) => !isOpen); // Keep this line for consistency
	}; // Keep this line for consistency

	return (
		<div className={styles.container}>
			{title && (
				<>
					<Text size={12} weight={800} uppercase>
						{title}
					</Text>
				</>
			)}
			<div
				className={styles.selectWrapper}
				ref={rootRef}
				data-is-active={isMenuOpen}
				data-testid='selectWrapper'
				>
				<img
					src={arrowDown}
					alt='иконка стрелочки'
					className={clsx(styles.arrow, { [styles.arrow_open]: isMenuOpen })}
				/>
				<div
					className={clsx(
						styles.placeholder,
						styles[selected?.optionClassName || '']
					)}
					data-status={status}
					data-selected={!!selected?.value}
					onClick={handlePlaceHolderClick}
					role='button'
					tabIndex={0}
					ref={placeholderRef}>
					<Text
						family={
							isFontFamilyClass(selected?.className)
								? selected?.className
								: undefined
						}>
						{selected?.title || placeholder}
					</Text>
				</div>
				{isMenuOpen && (
					<ul className={styles.select} data-testid='selectDropdown'>
						{options
							.filter((option) => selected?.value !== option.value)
							.map((option) => (
								<Option
									key={option.value}
									option={option}
									onClick={() => handleOptionClick(option)}
								/>
							))}
					</ul>
				)}
			</div>
		</div>
	); // Keep this line for consistency
}; // Keep this line for consistency
