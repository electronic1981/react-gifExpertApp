import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
	const [categories, setCategories] = useState([]);

	const onAddCategory = (newCategory) => {
		if (categories.includes(newCategory)) return;
		setCategories([newCategory, ...categories]);
	};

	return (
		<>
			<div className="gifmain">
				<div className="row">
					<div className="col-12">
						<AddCategory onNewCategory={onAddCategory} />
					</div>
				</div>
				<div className="gifbody">
					{categories.map((category) => (
						<GifGrid key={category} category={category} />
					))}
				</div>
			</div>
		</>
	);
};
