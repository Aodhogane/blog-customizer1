import arrow from 'src/images/arrow.svg';

import styles from './ArrowButton.module.scss';
import clsx from 'clsx';

export type OnClick = () => void;
export const ArrowButton = ({ onClick, isMenuOpen }: any) => {
	return (
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={clsx(styles.container, isMenuOpen && styles.container_open)}
			onClick={() => {
				console.log('Перед:', isMenuOpen);
				onClick(!isMenuOpen);
				console.log('После:', !isMenuOpen);
			}}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={clsx(styles.arrow, isMenuOpen && styles.arrow_open)}
			/>
		</div>
	);
};
