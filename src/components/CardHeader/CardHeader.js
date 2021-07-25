import React from 'react';

const CardHeader = ({ obj }) => {
	return (
		<div className="card__header">
			<div className="header__info">
				<p className="header__chip">{obj.id}</p>
				<p>{obj.name}</p>
			</div>
		</div>
	);
};

export default CardHeader;
