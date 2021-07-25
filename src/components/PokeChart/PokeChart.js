import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import TYPE_COLORS from '../../utils/pokeColors';

const options = {
	scales: {
		yAxes: [
			{
				ticks: {
					beginAtZero: true,
				},
			},
		],
	},
};

const PokeChart = ({ pokeQuantity }) => {
	const [data, setData] = useState({
		labels: [],
		datasets: [],
	});
	useEffect(() => {
		const labels = [];
		const values = [];
		const types = [];
		pokeQuantity.forEach((obj) => {
			labels.push(obj.name);
			values.push(obj.quantity);
			types.push(obj.type);
		});
		const backgroundColors = [];
		const borderColors = [];
		types.forEach((obj) => {
			backgroundColors.push(`#${TYPE_COLORS[obj.toLowerCase()]}10`);
			borderColors.push(`#${TYPE_COLORS[obj.toLowerCase()]}`);
		});
		setData({
			labels,
			datasets: [
				{
					label: 'Quantidade adicionada de Pokémons por Nome',
					data: values,
					backgroundColor: backgroundColors,
					borderColor: borderColors,
					borderWidth: 1,
				},
			],
		});
	}, [pokeQuantity]);

	return (
		<>
			<div className="pokemons__header">
				<div className="header__info">
					<p>
						Gráfico de quantidade adicionada de Pokémons por Nome{' '}
					</p>
				</div>
			</div>
			<Bar data={data} options={options} />
		</>
	);
};

export default PokeChart;
