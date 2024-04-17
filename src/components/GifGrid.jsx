import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {
	const { images, isLoading } = useFetchGifs(category);
	//console.log(isLoading);
	return (
		<>
			<div className="row">
				<div className="col-12">
					<h4>Results for: {category}</h4>
					{isLoading && <p>Cargando...</p>}
				</div>
				<div className="col-12">
					<div className="row card-grid">
						{images.map((image) => (
							<GifItem key={image.id} {...image} />
						))}
					</div>
				</div>
				<div className="col-12">
					<hr />
				</div>
			</div>
		</>
	);
};
