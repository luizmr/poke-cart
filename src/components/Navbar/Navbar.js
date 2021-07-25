import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

// assets
import { Button } from '@material-ui/core';
import Logo from '../../assets/images/logo.png';

// utils
import { connect } from 'react-redux';
import SelectFilter from '../SelectFilter/SelectFilter';
import selectTheme from './themeSelect';
import {
	changeToFire,
	changeToGrass,
	changeToWater,
} from '../../store/Theme/theme-actions';

const Navbar = ({
	cart,
	theme,
	changeToFire,
	changeToGrass,
	changeToWater,
}) => {
	const [pokeQuantity, setPokeQuantity] = useState(0);
	const history = useHistory();
	useEffect(() => {
		if (cart.length) {
			const pokeQuantityArray = [];
			cart.forEach((obj) => {
				pokeQuantityArray.push(Number(obj.quantity));
			});
			const finalQuantity = pokeQuantityArray.reduce(
				(acc, curr) => acc + curr,
				0,
			);
			setPokeQuantity(finalQuantity);
		} else {
			setPokeQuantity(0);
		}
	}, [cart]);

	const handleChangeThemeSelect = (e) => {
		const {
			target: { value },
		} = e;

		switch (value) {
			case 'fire':
				changeToFire(value);
				break;
			case 'grass':
				changeToGrass(value);
				break;
			case 'water':
				changeToWater(value);
				break;
			default:
				changeToFire('fire');
				break;
		}
	};

	return (
		<div className="navbar">
			<img
				src={Logo}
				alt="Logo"
				onClick={() => history.push('/')}
				aria-hidden="true"
			/>
			<div className="navbar__info">
				<div className="navbar__infoCart">
					<p>Pokedex</p>
					<Button
						className="infoCart__cart"
						onClick={() => history.push('/cart')}
					>
						<p>
							{pokeQuantity >= 2
								? `${pokeQuantity} pokémons capturados`
								: pokeQuantity === 1
								? `${pokeQuantity} pokémon capturado`
								: 'Nenhum pokémon capturado'}
						</p>
					</Button>
				</div>
				<SelectFilter
					options={selectTheme}
					label=""
					iconScale={1.6}
					handleChange={handleChangeThemeSelect}
					value={theme}
				/>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		cart: state.cart.cart,
		theme: state.theme.theme,
	};
};

export default connect(mapStateToProps, {
	changeToFire,
	changeToGrass,
	changeToWater,
})(Navbar);
