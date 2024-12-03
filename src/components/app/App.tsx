import { CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { defaultarticleConfig } from 'src/constants/articleProps';

import { ArticleParamsForm } from '../article-params-form/ui/ArticleParamsForm';
import { Article } from '../article/ui/Article';

import styles from './styles/index.module.scss';
import './styles/index.scss';

export const App = () => {
	const [globalAppConfig, setglobalAppConfig] = useState(defaultarticleConfig);

	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': globalAppConfig.fontFamilyOption.value,
					'--font-size': globalAppConfig.fontSizeOption.value,
					'--font-color': globalAppConfig.fontColorOption.value,
					'--container-width': globalAppConfig.contentWidthOption.value,
					'--bg-color': globalAppConfig.backgroundColorOption.value,
				} as CSSProperties
			}>
			<ArticleParamsForm updateglobalAppConfig={setglobalAppConfig} />
			<Article />
		</div>
	);
};
