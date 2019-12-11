import jQuery from "jquery";
import Component from "./Component";
import assign from 'lodash/assign';
import tinycolor from "tinycolor2";
import Swatch from './swatch';
import includes from 'lodash/includes';


class EditableInput extends Component {
	constructor(props) {
		super(props);

		this.customColorsList = [];

		this.state = {
			value: String(props.value).toUpperCase(),
			blurValue: String(props.value).toUpperCase(),
			peter: "lef"
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
		this.setUpdatedValue = this.setUpdatedValue.bind(this);
		this.handleCustomClick = this.handleCustomClick.bind(this);
	}

	handleBlur() {
		//console.log("handleBlur");
		if (this.state.blurValue) {
			this.setState({ value: this.state.blurValue, blurValue: null })
		}
	}

	handleChange(e){
		//console.log("change");
		//console.log(e);
		if (e.keyCode == 13){
			this.setUpdatedValue(e.target.value)
		}


	}

	handleCustomClick(color) {
		this.setUpdatedValue(color)
	}

	isColorValid(value) {
		var tiny = tinycolor(value);
		if (tiny.isValid()) {
			return true;
		}
		else {
			return false;
		}
	}

	setUpdatedValue(value) {
		//console.log("change");

		jQuery(".color-input-input input").removeClass("color-not-valid");

		if (!this.isColorValid(value)) {
			jQuery(".color-input-input input").addClass("color-not-valid");
		}
		else {
			var tiny = tinycolor(value);
			jQuery(".color-input-chip").css("background-color", tiny.toRgbString());




			if (this.props.onChange) {
				//this.props.onChange(value, false);
			}



			jQuery(".custom-colors").show();
			var customSwatchList = jQuery(".item-list");



			if (!includes(this.customColorsList, value)) {
				this.customColorsList.push(value);
				var props = {
					color:value,
					hex:value,
					onClick: this.handleCustomClick,
					folie: false
				};
				var swatch = new Swatch(props);
				customSwatchList.append(swatch.build());
			}



			this.setState({
				value: value,
				peter: "none"
			})
		}
	}

	build() {

		var defaultStyles = {
			wrap: {
				position: 'relative',
			},
			input:{},
			label:{}

		};
		var styles = {
			wrap: assign({}, this.props.style.wrap, defaultStyles.wrap),
			input: this.props.style && this.props.style.input ? this.props.style.input : {},
			label: this.props.style && this.props.style.label ? this.props.style.label : {},
		};

		var outerdiv = jQuery(document.createElement('div') );
		outerdiv.addClass("custom-option");

		var colorInput = jQuery(document.createElement('div') );

		colorInput.css(styles.wrap);
		colorInput.addClass("color-input");

		if (this.props.label && !this.props.hideLabel){
			var label = jQuery(document.createElement('div') );
			label.css(styles.label);
			label.addClass("color-input-name");
			label.append(this.props.label);
			colorInput.append(label);
		}

		var colorInputInputOuter = jQuery(document.createElement('div') );
		colorInputInputOuter.addClass("color-input-input");

		var input = jQuery(document.createElement('input') );

		input.css(styles.input);
		//input.val(String(this.props.value).toUpperCase());
		//input.on("change", this.handleChange);
		//input.on("blur",  this.handleBlur);
		//input.attr("placeholder", this.props.placeholder);
		input.attr("spellCheck", false);
		input.attr("maxlength", 7);
		input.on("keydown", this.handleChange);

		colorInputInputOuter.append(input);

		colorInput.append(colorInputInputOuter);

		var tiny = tinycolor(this.state.value);

		var colorInputChip = jQuery(document.createElement('div') );
		colorInputChip.addClass("color-input-chip");
		colorInputChip.css("background-color", tiny.toRgbString());

		colorInput.append(colorInputChip);
		outerdiv.append(colorInput);


		var customColorsName = jQuery(document.createElement('div') );
		customColorsName.addClass("custom-colors-name");
		customColorsName.append(" Gekozen kleuren ");

		var customColorsList = jQuery(document.createElement('div') );
		customColorsList.addClass("item-list");

		var customColors = jQuery(document.createElement('div') );
		customColors.addClass("custom-colors");
		customColors.hide();
		customColors.append(customColorsName);


		customColors.append(customColorsList);

		outerdiv.append(customColors);



		return outerdiv;
	}
}

EditableInput.defaultProps = {
	style: {
		wrap:{},
		input:{},
		label:{},
	},
	hideLabel:false,
	value:"",
}



export default EditableInput
