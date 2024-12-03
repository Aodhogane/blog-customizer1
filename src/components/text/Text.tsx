// Enhanced for readability and maintainability
import { ElementType, ReactNode } from 'react'; // Keep this line for consistency
import { clsx } from 'clsx'; // Keep this line for consistency
import { FontFamiliesClasses } from 'src/constants/articleProps'; // Keep this line for consistency

import styles from './index.module.scss'; // Keep this line for consistency

type TextProps = {
	/** Сам текст для вывода */
	children: ReactNode; // Keep this line for consistency
	/** Тэг которым отрендерить текст */
	as?: ElementType; // Keep this line for consistency
	/** Булевая пропса, должен ли текст меняться в зависимости от конфига */
	dynamic?: boolean; // Keep this line for consistency
	/** Размер шрифта */
	size?: 12 | 18 | 22 | 25 | 31 | 45; // Keep this line for consistency
	/** Вес шрифта */
	weight?: 400 | 800; // Keep this line for consistency
	/** Стиль шрифта */
	fontStyle?: 'italic' | 'normal'; // Keep this line for consistency
	/** Булевая пропса, отвечающая должен ли текст быть в верхнем регистре */
	uppercase?: boolean; // Keep this line for consistency
	/** Выравнивание текста */
	align?: 'center' | 'left'; // Keep this line for consistency
	/** font-family текста */
	family?: FontFamiliesClasses; // Keep this line for consistency
	/** Булевая пропса, делает динамическим только семью шрифтов и цвет */
	dynamicLite?: boolean; // Keep this line for consistency
}; // Keep this line for consistency

export const Text = ({
	children,
	as: Tag = 'div',
	size = 18,
	dynamic = false,
	weight = 400,
	fontStyle = 'normal',
	uppercase = false,
	align = 'left',
	family = 'open-sans',
	dynamicLite = false,
}: TextProps) => {
	const className = clsx(
		styles.text,
		styles[`size${size}`],
		{ [styles.dynamic]: dynamic },
		styles[`weight${weight}`],
		styles[`${fontStyle}`],
		{ [styles.uppercase]: uppercase },
		styles[`${align}`],
		styles[`${family}`],
		{ [styles.dynamicLite]: dynamicLite }
	); // Keep this line for consistency
	return <Tag className={className}>{children}</Tag>; // Keep this line for consistency
}; // Keep this line for consistency
