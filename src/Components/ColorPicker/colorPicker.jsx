import { useEffect, useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import tinycolor from "tinycolor2";

import DialogTitle from "../DialogTitle";
import { Saturation, Hue } from "../Palette";

import "./colorpicker.scss";


const ColorPicker = ({onClick, onChange, initialColor = "#96458b"}) => {

	const [color, setColor] = useState(tinycolor(initialColor));
	
	useEffect(() => {
		setColor(tinycolor(initialColor));
	}, [initialColor]);

	const localOnChange = (color) => {
		setColor(color);
		onChange(color.toHexString());
	}
	
	const chipStyle = {
		backgroundColor: color.toHexString()
	};

	return (
		<div>
			<DialogTitle onClick={onClick}>
				<FontAwesomeIcon icon={faArrowLeft} />
				<span>Terug</span>
			</DialogTitle>
			
			<div className="custom-color">
				<div className="custom-color-chip" style={chipStyle}></div>
				<input maxLength="7" required="" className="custom-color-input" onChange={localOnChange} value={color.toHexString()} placeholder="#96458b"/>
			</div>

			<div>
				<Saturation height={300} color={color} onChange={localOnChange} />
				<Hue color={color} onChange={localOnChange} />
			</div>
		</div>
	)
}

export default ColorPicker;