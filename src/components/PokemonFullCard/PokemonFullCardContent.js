import { FormControlLabel, IconButton, Switch } from '@material-ui/core';
import React from 'react';
import { FiMinusCircle, FiPlusCircle } from 'react-icons/fi';

// utils
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from '../../store/PokeCart/cart-actions';
import TYPE_COLORS from '../../utils/pokeColors';

const PokemonFullCardContent = ({
	obj,
	pokemon,
	setPokemon,
	addToCart,
	removeFromCart,
}) => {
	const handleDispatchAdd = (element, quantity) => {
		addToCart({
			...element,
			quantity,
		});
		setPokemon({ ...element, quantity });
	};

	const handleDisptachRemove = (element, quantity) => {
		removeFromCart({
			...element,
			quantity,
		});
		setPokemon({ ...element, quantity });
	};

	const handlePlus = () => {
		const quantityInNumber = Number(pokemon.quantity);
		if (pokemon.quantity === 0 || pokemon.quantity === '') {
			handleDispatchAdd(obj, quantityInNumber + 1);
		} else {
			handleDispatchAdd(pokemon, quantityInNumber + 1);
		}
	};

	const handleMinus = () => {
		const quantityInNumber = Number(pokemon.quantity);
		if (quantityInNumber <= 0 || pokemon.quantity === '') {
			handleDisptachRemove(obj, 0);
		} else {
			if (pokemon.quantity === '1') {
				handleDisptachRemove(pokemon, 0);
			}
			handleDisptachRemove(pokemon, quantityInNumber - 1);
		}
	};

	const handleConfirmProductQuantity = () => {
		const quantityInNumber = Number(pokemon.quantity);
		if (quantityInNumber === 0) {
			if (Object.keys(pokemon).length > 1) {
				handleDisptachRemove(pokemon, 0);
			} else {
				handleDisptachRemove(obj, 0);
			}
		} else {
			if (Object.keys(pokemon).length > 1) {
				handleDispatchAdd(pokemon, quantityInNumber);
			}
			handleDispatchAdd(obj, quantityInNumber);
		}
	};

	const handleInputValueChange = (e) => {
		handleProductQuantityChange(e.target.value);
	};

	const handleProductQuantityChange = (value) => {
		setPokemon({
			...pokemon,
			quantity: value < 0 || `${value}` === '-' ? `` : `${value}`,
		});
	};

	return (
		<div className="card__content">
			<div className="content__img">
				<img src={obj.image} alt={obj.name} />
			</div>
			<div className="content__info">
				<div className="pokemon__main">
					<div className="pokemon__details">
						<div className="detail__base">
							<p className="detail__title">Onde vive</p>
							<div className="base__content">
								{obj.locationAreas.map((el) => (
									<span>
										{el.location_area.name.replace(
											/-/g,
											' ',
										)}
									</span>
								))}
							</div>
						</div>
						<div className="detail__base">
							<p className="detail__title">Altura</p>
							<div className="base__content">
								<span className="not-capitalize">
									{obj.height / 10} m
								</span>
							</div>
						</div>
						<div className="detail__base">
							<p className="detail__title">Peso</p>
							<div className="base__content">
								<span>{obj.weight / 10} Kg</span>
							</div>
						</div>
						<div className="detail__base">
							<p className="detail__title">Habilidades</p>
							<div className="base__content">
								{obj.abilities.map((el) => (
									<span>{el.ability.name}</span>
								))}
							</div>
						</div>
						<div className="detail__quantity">
							<p className="detail__title">Quantidade (un)</p>
							<div className="quantity__content">
								<IconButton
									className={
										Number(pokemon.quantity) >= 1
											? 'minus__active'
											: ''
									}
									onClick={handleMinus}
									disabled={
										!pokemon.quantity ||
										pokemon.quantity === 0
									}
								>
									<FiMinusCircle />
								</IconButton>
								<div>
									<input
										min="0"
										type="number"
										value={pokemon ? pokemon.quantity : 0}
										onChange={handleInputValueChange}
										onBlur={() => {
											handleConfirmProductQuantity();
										}}
									/>
									<span
										style={
											pokemon.quantity !== '0'
												? { display: 'block' }
												: { display: 'none' }
										}
									>
										un
									</span>
								</div>
								<IconButton
									className={'plus__active'}
									onClick={handlePlus}
								>
									<FiPlusCircle />
								</IconButton>
							</div>
						</div>
					</div>
				</div>
				<div className="pokemon__bottom">
					{obj.types.map((el) => (
						<div
							className="bottom__chip"
							style={{
								backgroundColor: `#${
									TYPE_COLORS[el.type.name]
								}`,
							}}
						>
							<p>{el.type.name}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default connect(null, {
	addToCart,
	removeFromCart,
})(PokemonFullCardContent);
