import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// components
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Pokemons from './pages/Pokemons/Pokemons';
import Navbar from './components/Navbar/Navbar';
import Cart from './pages/Cart/Cart';
import PokemonInfo from './pages/PokemonInfo/PokemonInfo';
import NotFound from './pages/NotFound/NotFound';

const CustomRoute = ({ key, Component, path }) => (
	<Route exact key={key} path={path} component={Component} />
);
const routeOptions = [
	{
		key: 'pokemons',
		Component: Pokemons,
		path: '/',
	},
	{
		key: 'cart',
		Component: Cart,
		path: '/cart',
	},
	{
		key: 'pokemon-info',
		Component: PokemonInfo,
		path: '/pokemon/:poke',
	},
];

export const Routes = () => {
	return (
		<Router>
			<ScrollToTop />
			<Navbar />
			<div className="app">
				<div className="routes">
					<Switch>
						{routeOptions.map((route) => CustomRoute({ ...route }))}
						<Route path="*" component={NotFound} />
					</Switch>
				</div>
			</div>
		</Router>
	);
};
