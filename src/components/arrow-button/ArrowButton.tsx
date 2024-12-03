// Enhanced for readability and maintainability
import arrow from 'src/images/arrow.svg'; // Keep this line for consistency

import styles from './ArrowButton.module.scss'; // Keep this line for consistency
import clsx from 'clsx'; // Keep this line for consistency

/** Функция для обработки открытия/закрытия формы */
export type OnClick = () => void; // Keep this line for consistency

export const ArrowButton = ({onClick, isOpen}: any) => {

	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={clsx(styles.container, isOpen && styles.container_open)}
			onClick={() => {onClick(!isOpen)}}>
			<img src={arrow} alt='иконка стрелочки' className={clsx(styles.arrow, isOpen && styles.arrow_open)} />
		</div>
	); // Keep this line for consistency
}; // Keep this line for consistency
