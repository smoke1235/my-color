
import { useState, useRef, useEffect, Fragment} from "react";
import tinycolor from "tinycolor2";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import {map, concat} from 'lodash'

import Dialog from "./Components/Dialog";
import DialogTitle from "./Components/DialogTitle";
import TabHeader from "./Components/TabHeader";
import TabPanel from "./Components/TabPanel";
import Swatch from "./Components/Swatch";
import ColorPicker from "./Components/ColorPicker";

import "./index.scss";

const defaultProps = {
	openSelectStyle: {
		touchAaction: "none",
		userSelect: "none",
	},
	color: "#000000",
	change: () =>{}
}

const MyColor = ({
	taps,
	change = defaultProps.change, 
	openSelectStyle = defaultProps.openSelectStyle,
	color = defaultProps.color,
}) => {
	let [isOpen, setIsOpen] = useState(false);
	let [colorState, setColorState] = useState(color);
	let [folie, setFolie] = useState(false);
	let [isCustomView, setIsCustomView] = useState(false);
	let [openSelectStyleState, setOpenSelectStyleState] = useState(openSelectStyle);
	let dialogRef = useRef();

	useEffect(() => {
		setColorState(color);
		let btnStyle = {};
		
		if (!folie) {
			btnStyle = {
				backgroundColor: color
			}
		}
		else {
			var tiny = tinycolor(color);
			btnStyle = {
				backgroundImage: "linear-gradient(to right top, "+tiny.toRgbString()+", white)"
			}	
		}

		let openSelectStyle = Object.assign({}, defaultProps.openSelectStyle, btnStyle);
		setOpenSelectStyleState(openSelectStyle);
	}, [color, folie]);

	useEffect(() => {
  		const handler = (event) => {
    		if (!dialogRef.current) {
      			return;
    		}
    		// if click was not inside of the element. "!" means not
    		// in other words, if click is outside the modal element
    		if (!dialogRef.current.contains(event.target)) {
      			setIsOpen(false);
    		}
  		};
  		// the key is using the `true` option
  		// `true` will enable the `capture` phase of event handling by browser
  		document.addEventListener("click", handler, true);
  		return () => {
    		document.removeEventListener("click", handler);
  		};
	}, []);

	const onDialogClick = () => {
		setIsOpen((prevCount) => {
      		const newCount = !prevCount;
      		return newCount;
    	});
	}
	const setSelected = () => {
		console.log("aa"); 
	}

	const _createTaps = () => {
		var elements = [];
		var i = 0;
		map(taps, (props, index) => {
			var selected = false;
			if (i == 0) {
				selected = true;
			}

			const panelKey = "panel-"+index;
			const fragmentKey = "tap-"+index;
			const headerKey = "header-"+index;

			elements.push((
				<Fragment key={fragmentKey}>
				<TabHeader
					key={headerKey}
					id={index} 
					panelId={'react-tabs-{index}'}
					setSelected={setSelected}
					selected={selected}
					hasInfo={props.hasInfo}
					className="color-list-header"
				>
					{props.name}
				</TabHeader>
				
				<TabPanel id={index} tabId='react-tabs-' selected={selected} key={panelKey} className="color-list">
					{_createSwatches(props)}
				</TabPanel>
				</Fragment>
			))
			i++;
		});

		return elements;
	}

	const handleChange = (color, folie) => {
		setColorState(color);
		setFolie(folie);
		change(color, folie);

		let btnStyle = {};
		
		if (!folie) {
			btnStyle = {
				backgroundColor: color
			}
		}
		else {
			var tiny = tinycolor(color);
			btnStyle = {
				backgroundImage: "linear-gradient(to right top, "+tiny.toRgbString()+", white)"
			}	
		}

		let openSelectStyle = Object.assign({}, defaultProps.openSelectStyle, btnStyle);
		setOpenSelectStyleState(openSelectStyle);

	}

	const onClickCustomButton = () => {
		setIsCustomView((prevCount) => {
      		const newCount = !prevCount;
      		return newCount;
    	});
	}

	const _createSwatches = (props) =>{
		var colorPalette = props.palette;
		var folie = props.folie;
		const custom = [];
		
		if (props.custom) {
			custom.push((
				<button
					onClick={onClickCustomButton}
					className="icon-square add-custom-color-button" 
					style={{width: "35.2222px", height: "35.2222px"}}>
						<span>
							<FontAwesomeIcon icon={faPlus} />
						</span>
						<span className="text" style={{marginLeft: "0px", marginRight:"0px"}}></span>
				</button>
			))
		}

		const swatches = map(colorPalette, (c, i) => {
			return (
				<Swatch
					key={i}
					color={c}
					hex={c}
					onClick={handleChange}
					folie={folie}
					selectedColor={colorState}
					custom={props.custom}			
				/>
			)
		});

		const allSwatches = concat(custom, swatches);
		return allSwatches;
	}

	const onChangeCustom = () => {

	}

	const renderColors = () => {
		return (
			<>
				<DialogTitle>
					<span>Kleuren</span>
				</DialogTitle>
				<div className="menu color-menu">
					{_createTaps()}
				</div>
			</>
		)
	}

	const renderColorPicker = () => {
		return (
			<ColorPicker onClick={onClickCustomButton} onChange={onChangeCustom}/>
		)
	}
		
	return (
		<div ref={dialogRef}>
			<div 
				className="open-select" 
				style={openSelectStyleState}
				onClick={onDialogClick}
			></div>
		
			<Dialog  open={isOpen}>
				{isCustomView ? renderColorPicker() : renderColors()}
			</Dialog>
		</div>
	)
}

export default MyColor;
