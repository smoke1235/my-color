import jQuery from "jquery";
import Component from "./Component";
import assign from 'lodash/assign';
import tinycolor from "tinycolor2";


class EditableInput extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: String(props.value).toUpperCase(),
			blurValue: String(props.value).toUpperCase(),
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
		this.setUpdatedValue = this.setUpdatedValue.bind(this);
	}

	handleBlur() {
		if (this.state.blurValue) {
			this.setState({ value: this.state.blurValue, blurValue: null })
		}
	}

	handleChange(e){
		this.setUpdatedValue(e.target.value, e)
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

	setUpdatedValue(value, e) {
		jQuery(".color-input-input input").removeClass("color-not-valid");

		if (!this.isColorValid(value)) {
			jQuery(".color-input-input input").addClass("color-not-valid");
		}
		else {
			var tiny = tinycolor(value);
			jQuery(".color-input-chip").css("background-color", tiny.toRgbString());

			if (this.props.onChange) {
				this.props.onChange(value, false);
			}

			this.setState({
				value: value
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
		const styles = {
			wrap: assign({}, this.props.style.wrap, defaultStyles.wrap),
			input: this.props.style && this.props.style.input ? this.props.style.input : {},
			label: this.props.style && this.props.style.label ? this.props.style.label : {},
		};

		var outerdiv = jQuery(document.createElement('div') );
		outerdiv.css(styles.wrap);
		outerdiv.addClass("color-input");

		if (this.props.label && !this.props.hideLabel){
			var label = jQuery(document.createElement('div') );
			label.css(styles.label);
			label.addClass("color-input-name");
			label.append(this.props.label);
			outerdiv.append(label);
		}

		var colorInputInputOuter = jQuery(document.createElement('div') );
		colorInputInputOuter.addClass("color-input-input");

		var input = jQuery(document.createElement('input') );
		input.css(styles.input);
		input.val(this.state.value);
		input.on("change", this.handleChange);
		input.on("blur",  this.handleBlur);
		input.attr("placeholder", this.props.placeholder);
		input.attr("spellCheck", false);
		input.attr("maxlength", 7);

		colorInputInputOuter.append(input);

		outerdiv.append(colorInputInputOuter);

		var colorInputChip = jQuery(document.createElement('div') );
		colorInputChip.addClass("color-input-chip");
		colorInputChip.css("background-color", "rgb(255, 255, 255);");

		outerdiv.append(colorInputChip);

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
