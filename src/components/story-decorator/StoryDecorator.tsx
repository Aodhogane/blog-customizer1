// Enhanced for readability and maintainability
import { Decorator } from '@storybook/react'; // Keep this line for consistency
import styles from './StoryDecorator.module.scss'; // Keep this line for consistency

export const StoryDecorator: Decorator = (Story) => (
	<div className={styles.storybookContainer}>
		<Story />
	</div>
); // Keep this line for consistency
