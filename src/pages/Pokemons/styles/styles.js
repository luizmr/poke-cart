import styled from 'styled-components';

const SearchBox = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	width: 100%;

	svg {
		color: #fff;
		background-color: ${(props) =>
			props.theme === 'fire'
				? '#f08e1c'
				: props.theme === 'grass'
				? '#934594'
				: '#A3E7FD'};
		padding: 8px;
		transform: scale(1.3);
		border-radius: 50%;
		z-index: 100;
		transition: all 0.3s ease-in-out;

		&:hover {
			cursor: pointer;
			transform: scale(1.4);
		}
	}

	.filter__search {
		background-color: ${(props) =>
			props.theme === 'fire'
				? '#f5d1ae'
				: props.theme === 'grass'
				? '#f6d2f7'
				: '#d8f1fa'};
		width: 90%;
		position: relative;
		transform: translateX(-10px);

		input {
			background-color: ${(props) =>
				props.theme === 'fire'
					? '#f5d1ae'
					: props.theme === 'grass'
					? '#f6d2f7'
					: '#d8f1fa'};
			width: 100%;
			color: ${(props) =>
				props.theme === 'fire'
					? '#E73B0C'
					: props.theme === 'grass'
					? '#74C236'
					: '#3295F6'};
			padding: 10px 10px 10px 30px;
			border: none;
			border-radius: 20px;
			font-weight: 600;
			font-family: 'Open Sans';

			&::placeholder {
				color: ${(props) =>
					props.theme === 'fire'
						? '#E73B0C'
						: props.theme === 'grass'
						? '#74C236'
						: '#3295F6'};
			}

			&:active,
			&:focus {
				border: none;
				outline: none;
			}
		}
	}
`;

export { SearchBox };
