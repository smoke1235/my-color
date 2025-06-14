import tinycolor from "tinycolor2";
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const Swatch = ({
	color, 
	folie, 
	onClick, 
	hex, 
	selectedColor
}) => {

	const hexToRgbA = (hex) => {
		const rgbColor = tinycolor(hex);
		return rgbColor.toPercentageRgbString();
	}

	const localOnClick = () => {
		onClick(color, folie);
	}

	let inner = "";
	let isSelected = false;

	if (selectedColor === color) {
		isSelected = true;
		inner = (<FontAwesomeIcon icon={faCheck} />);
	}

	const swatchStyle = {
		background: hexToRgbA(hex),
		//cursor: 'pointer',
		//position: 'relative',
		//outline: 'none',
		//width: '15px',
		//height: '15px',
		//float: 'left',
		//borderRadius: '4px',
		//margin: '0 6px 6px 0',
		//"boxShadow": "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset",
		width: "35.2222px",
    	height: "35.2222px"
	};

	const tiny = tinycolor(hex);
	const className = classNames('color-list-item', {
		'selected': isSelected,
		"sp-thumb-dark": tiny.toHsl().l < 0.5,
		"sp-thumb-light" : tiny.toHsl().l > 0.5,
	})


	return (
		<div
			title={color}
			className={className}
			tabIndex={0}
			style={swatchStyle}
			onClick={localOnClick}
		>
			{inner}

		</div>
	);
}

export default Swatch;
