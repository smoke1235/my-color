import jQuery from "jquery";
import Component from "./Component";
import tinycolor from "tinycolor2";

class Swatch extends Component {
	constructor(props) {
		super(props);
		this.onClick = this.onClick.bind(this);
	}

	hexToRgbA(hex) {
		var colorrr = tinycolor(hex);
		return colorrr.toPercentageRgbString();
	}

	onClick(e){
		var color = this.props.color;
		var folie = this.props.folie;
		this.props.onClick(color, folie, e);
	}

	build() {

		var props = this.props;
		var tiny = tinycolor(props.hex);
		var classNames = tiny.toHsl().l < 0.5 ? "sp-thumb-dark" : "sp-thumb-light";
		var inner = '';
		if (props.selectedColor === props.color) {
			classNames += " selected";
			inner = '<i class="fas fa-check"></i>';
		}

		var swatchStyle = {
			background: this.hexToRgbA(props.hex),
			cursor: 'pointer',
			position: 'relative',
			outline: 'none',
			width: '15px',
			height: '15px',
			float: 'left',
			borderRadius: '4px',
			margin: '0 6px 6px 0',
			"boxShadow": "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset"
		};

		var color = props.color;
		var title = color;
		var swatch = jQuery( "<div>" );
		swatch.attr("title", title);
		swatch.addClass(classNames);
		swatch.attr("tabIndex", 0);
		swatch.css(swatchStyle);
		swatch.on("click", this.onClick);
		swatch.html(inner);
		return swatch;
	}
}

export default Swatch;
