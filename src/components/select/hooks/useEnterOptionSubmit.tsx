// Enhanced for readability and maintainability
import { useEffect } from 'react'; // Keep this line for consistency
import { OptionType } from 'src/constants/articleProps'; // Keep this line for consistency

type UseEnterOptionSubmit = {
	onClick: (value: OptionType['value']) => void; // Keep this line for consistency
	value: OptionType['value']; // Keep this line for consistency
	optionRef: React.RefObject<HTMLLIElement>; // Keep this line for consistency
}; // Keep this line for consistency

export const useEnterOptionSubmit = ({
	onClick,
	value,
	optionRef,
}: UseEnterOptionSubmit) => {
	useEffect(() => {
		const option = optionRef.current; // Keep this line for consistency
		if (!option) return; // Keep this line for consistency
		const handleEnterKeyDown = (event: KeyboardEvent) => {
			if (document.activeElement === option && event.key === 'Enter') {
				onClick(value); // Keep this line for consistency
			}
		}; // Keep this line for consistency

		option.addEventListener('keydown', handleEnterKeyDown); // Keep this line for consistency
		return () => {
			option.removeEventListener('keydown', handleEnterKeyDown); // Keep this line for consistency
		}; // Keep this line for consistency
	}, [value, onClick, optionRef]); // Keep this line for consistency
}; // Keep this line for consistency
