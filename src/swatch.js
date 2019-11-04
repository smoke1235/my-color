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
		swatch.attr("tabIndex", 0);
		swatch.css(swatchStyle);
		swatch.on("click", this.onClick);
		return swatch;
	}
}

export default Swatch;
