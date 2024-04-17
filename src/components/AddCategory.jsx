import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) =>{ // Recibe el objeto Event del onChange... 
        setInputValue(target.value);
    }

    const onSubmit = (ev) => {
        ev.preventDefault();
        if(inputValue.trim().length <= 1) return;
        //setCategories(categories => [...categories, inputValue]); // Recibiendo la función del state
        onNewCategory(inputValue); // Recibiendo la función extra del padre... 
        setInputValue('');
    }


  return (
		<>
			<form onSubmit={onSubmit}>
				<div className="form-row">
					<div className="col"></div>
					<div className="col-8">
						<h1>Buscador Gif App...</h1>
					</div>
					<div className="col"></div>
				</div>
				<div className="form-row">
					<div className="col">&nbsp;</div>
					<div className="col-md-6 ">
						<input
							type="text"
							placeholder="Buscar Gifs..."
							value={inputValue}
							onChange={onInputChange}
							className="form-control"
						/>
					</div>
					<div className="col-md-2 text-left">
						<button type="submit" className="btn btn-primary">
							Buscar
						</button>
					</div>
					<div className="col">&nbsp;</div>
					<div className="col-md-12">
						<hr />
					</div>
				</div>
			</form>
		</>
  );
}
