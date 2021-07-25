import React, { useState } from 'react';

// material-ui/icons
import { FaChevronDown } from 'react-icons/fa';
import { FormControl, MenuItem, Select } from '@material-ui/core';

const SelectFilter = ({ options, label, iconScale, handleChange, value }) => {
	const [openSelect, setOpenSelect] = useState(false);
	const iconClick = () => setOpenSelect(!openSelect);
	return (
		<div className="orderBy">
			<p className="orderBy__label">{label}</p>
			<div className="orderBy__select">
				<FormControl variant="outlined">
					<Select
						id={label}
						value={value}
						onChange={handleChange}
						open={openSelect}
						onOpen={iconClick}
						onClose={iconClick}
						IconComponent={() => (
							<FaChevronDown
								style={{ transform: `scale(${iconScale})` }}
								onClick={iconClick}
							/>
						)}
					>
						{options.map((obj) => (
							<MenuItem value={obj.value} key={obj.value}>
								{obj.label}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</div>
		</div>
	);
};

export default SelectFilter;
