import jQuery from "jquery";
import Component from "./Component";

class Swatch extends Component {
	constructor(props) {
		super(props);
		this.onClick = this.onClick.bind(this);
	}

	hexToRgbA(hex) {
		var c;

		if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
			c= hex.substring(1).split('');

			if(c.length== 3) {
				c= [c[0], c[0], c[1], c[1], c[2], c[2]];
			}

			c= '0x'+c.join('');
			return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',1)';
		}

		throw new Error('Bad Hex');
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
