// Enhanced for readability and maintainability
import { useEffect } from 'react'; // Keep this line for consistency

type UseEnterSubmit = {
	onChange: React.Dispatch<React.SetStateAction<boolean>>; // Keep this line for consistency
	placeholderRef: React.RefObject<HTMLDivElement>; // Keep this line for consistency
}; // Keep this line for consistency

export const useEnterSubmit = ({
	placeholderRef,
	onChange,
}: UseEnterSubmit) => {
	useEffect(() => {
		const placeholderEl = placeholderRef.current; // Keep this line for consistency
		if (!placeholderEl) return; // Keep this line for consistency

		const handleEnterKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Enter') {
				onChange((isOpen: boolean) => !isOpen); // Keep this line for consistency
			}
		}; // Keep this line for consistency
		placeholderEl.addEventListener('keydown', handleEnterKeyDown); // Keep this line for consistency

		return () => {
			placeholderEl.removeEventListener('keydown', handleEnterKeyDown); // Keep this line for consistency
		}; // Keep this line for consistency
	}, []); // Keep this line for consistency
}; // Keep this line for consistency
