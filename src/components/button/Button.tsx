// Enhanced for readability and maintainability
import { Text } from 'components/text'; // Keep this line for consistency

import styles from './Button.module.scss'; // Keep this line for consistency

export const Button = ({
	title,
	onClick,
	type,
}: {
	title: string; // Keep this line for consistency
	onClick?: () => void; // Keep this line for consistency
	type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type']; // Keep this line for consistency
}) => {
	return (
		<button className={styles.button} type={type} onClick={onClick}>
			<Text weight={800} uppercase>
				{title}
			</Text>
		</button>
	); // Keep this line for consistency
}; // Keep this line for consistency
