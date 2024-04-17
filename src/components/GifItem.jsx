
export const GifItem = (image) => {
    const {id, title,url} =image;
  return (
		<div className="col-md-2 card">
			<img src={ url } alt={ title } />
			<p>{ title }</p>
		</div>
  );
}
