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

const TypesChart = ({ typesQuantity }) => {
	const [data, setData] = useState({
		labels: [],
		datasets: [],
	});
	useEffect(() => {
		const labels = Object.keys(typesQuantity);
		const values = Object.values(typesQuantity);
		const backgroundColors = [];
		const borderColors = [];
		labels.forEach((obj) => {
			backgroundColors.push(`#${TYPE_COLORS[obj.toLowerCase()]}10`);
			borderColors.push(`#${TYPE_COLORS[obj.toLowerCase()]}`);
		});
		setData({
			labels,
			datasets: [
				{
					label: 'Quantitade de Pokes por tipos',
					data: values,
					backgroundColor: backgroundColors,
					borderColor: borderColors,
					borderWidth: 1,
				},
			],
		});
	}, [typesQuantity]);

	return (
		<>
			<div className="pokemons__header">
				<div className="header__info">
					<p>Gráfico de quantidade de Pokémons por tipo</p>
				</div>
			</div>
			<Bar data={data} options={options} />
		</>
	);
};

export default TypesChart;
