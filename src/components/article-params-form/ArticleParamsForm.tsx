// Enhanced for readability and maintainability
import { ArrowButton } from '../../ui/arrow-button'; // Keep this line for consistency
import { Button } from '../../ui/button'; // Keep this line for consistency
import { Text } from '../../ui/text';

import styles from './ArticleParamsForm.module.scss'; // Keep this line for consistency
import { useRef, useState } from 'react'; // Keep this line for consistency
import clsx from 'clsx'; // Keep this line for consistency
import { Select } from '../../ui/select'; // Keep this line for consistency
import {
	ArticleStateType,
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
	OptionType,
} from 'src/constants/articleProps'; // Keep this line for consistency
import { RadioGroup } from '../../ui/radio-group'; // Keep this line for consistency
import { Separator } from '../../ui/separator'; // Keep this line for consistency
import { useOutsideClickClose } from '../../ui/select/hooks/useOutsideClickClose'; // Keep this line for consistency

type ArticleParamsFormProps = {
	stateForm: (formState: typeof defaultArticleState) => void; // Keep this line for consistency
};

export const ArticleParamsForm = ({ stateForm }: ArticleParamsFormProps) => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	const rootRef = useRef<HTMLDivElement>(null);
	const [selectArticleState, setSelectArticleState] =
		useState<ArticleStateType>(defaultArticleState);

	const handleChange = (key: keyof ArticleStateType, value: OptionType) => {
		setSelectArticleState({ ...selectArticleState, [key]: value });
	};

	useOutsideClickClose({
		isMenuOpen,
		rootRef,
		onClose: () => setIsMenuOpen(false),
		onChange: setIsMenuOpen,
		event: 'mousedown',
	});

	return (
		<>
			<ArrowButton
				onClick={() => setIsMenuOpen(true)}
				isMenuOpen={isMenuOpen}
			/>
			<div ref={rootRef} className={clsx(styles.container__width)}>
				{/* Кнопка открытия */}

				{/* Выезжающий блок */}
				<aside
					className={clsx(
						styles.container,
						isMenuOpen && styles.container_open
					)}>
					<form
						className={clsx(
							styles.form,
							isMenuOpen && styles.container_relative
						)}
						onSubmit={(e) => {
							e.preventDefault();
							stateForm(selectArticleState);
						}}
						onReset={(e) => {
							e.preventDefault();
							stateForm(defaultArticleState);
						}}>
						<Text weight={800} uppercase as={'h3'} size={31}>
							Задайте параметры
						</Text>
						<Select
							title='Шрифт'
							selected={selectArticleState.fontFamilyOption}
							options={fontFamilyOptions}
							onChange={(option) => {
								handleChange('fontFamilyOption', option);
							}}
						/>
						<RadioGroup
							title={'Размер шрифта'}
							name={'Размер шрифта'}
							selected={selectArticleState.fontSizeOption}
							options={fontSizeOptions}
							onChange={(option) => {
								handleChange('fontSizeOption', option);
							}}
						/>
						<Select
							title='цвет шрифта'
							selected={selectArticleState.fontColor}
							options={fontColors}
							onChange={(option) => {
								handleChange('fontColor', option);
							}}
						/>
						<Separator />
						<Select
							title='цвет фона'
							selected={selectArticleState.backgroundColor}
							options={backgroundColors}
							onChange={(option) => {
								handleChange('backgroundColor', option);
							}}
						/>
						<Select
							title='ширина контента'
							selected={selectArticleState.contentWidth}
							options={contentWidthArr}
							onChange={(option) => {
								handleChange('contentWidth', option);
							}}
						/>
						<div className={styles.bottomContainer}>
							<Button title='Сбросить' type='reset' />
							<Button title='Применить' type='submit' />
						</div>
					</form>
				</aside>
			</div>
		</>
	);
};
