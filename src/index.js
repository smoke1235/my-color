import jQuery from "jquery";
import map from 'lodash/map'
import Swatch from './swatch';
import EditableInput from "./EditableInput";
import Dialog from './dialog';
import Tab from './tabs/Tab';
import TabList from "./tabs/TabList";
import TabPanel from "./tabs/TabPanel";
import Tabs from "./tabs/Tabs";

class mynewcolor {
	constructor(element, opts) {
		this.element = element;
		this.options = opts;
		this.diaOpen = false;
		this.color = "#000000";

		this._createWrapper();
		this._createDialog();
		this._createTaps();

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(color, folie) {

		this.color = color;
		this.folie = false;

		if (this.options.change) {
			this.options.change(color);
		}

		jQuery(".open-select").removeAttr( 'style' );

		if (!folie) {
			jQuery(".open-select").css(mynewcolor.defaultProps.openSelectStyle);
			jQuery(".open-select").css("background-color", color);
		}
		else {
			jQuery(".open-select").css(mynewcolor.defaultProps.openSelectStyle);
			jQuery(".open-select").css("background-image", "linear-gradient(to right top, rgb(214, 160, 14), white)");
		}
	}

	openDialog() {
		if (this.diaOpen) {
			this.dia.close();

			if (this.options.hide)
				this.options.hide(this.color);
		}
		else {
			this.dia.open();
		}

		this.diaOpen = !this.diaOpen;
	}


	setColor(color) {
		this.handleChange(color, false);
	}

	getColor() {
		return this.color;
	}

	_createSwatches(props){
		var colorPalette = props.palette;
		var folie = props.folie;
		var custom = props.custom;
		var swatchList = jQuery();
		this.handleChange = this.handleChange.bind(this);

		if (custom) {
			var editableInput = new EditableInput({label:" Kleurcode ", onChange:this.handleChange});
			swatchList = swatchList.add(editableInput.build());
		}
		else {
			map(colorPalette, (c, i) => {
				var props = {
					key:i,
					color:c,
					hex:c,
					onClick: this.handleChange,
					folie: folie
				};
				var swatch = new Swatch(props);
				swatchList = swatchList.add(swatch.build());
			});
		}

		return swatchList;
	}

	_createWrapper() {
		var self = this;
		this.uiDialog = jQuery( "<div>" )
			.attr( {
				class: "open-select",
				style: "background-image: linear-gradient(to right top, rgb(214, 160, 14), white);"

			})
			.appendTo( this.element );

		this.uiDialog.on ({
			click : function () {
				self.openDialog();
			},

			longpress : function () {
				console.log("longpress");
			},

			keydown : function () {
				console.log("keydown");
			},

			touchend : function () {
				console.log("touchend");
			},
		})
	}

	_createDialog() {
		this.dia = new Dialog();
		this.dia.create(this.element);
	}

	_createTaps() {
		var aaaaa = [];
		var bbbbb = [];
		var ccccc = [];
		var i = 0;
		map(this.options.taps, (props, index) => {
			var selected = false;
			if (i == 0){
				selected = true;
			}
			aaaaa.push(this._createTapsHeader(props, index, selected));
			bbbbb.push(this._createTapsPanel(props, index, selected));
			i++;
		});

		var tablist = new TabList({children: aaaaa});

		ccccc.push(tablist.build());
		var d = ccccc.concat(bbbbb)

		var tabsasfdsd = new Tabs({children:d});
		this.dia.setContent(tabsasfdsd.build());
	}

	setSelected(e) {
		jQuery(".react-tabs__tab-list .react-tabs__tab").removeClass("selected");
		jQuery(".react-tabs__tab-list #"+e).addClass("selected");

		jQuery(".react-tabs__tab-panel").removeClass("selected");
		jQuery(".react-tabs__tab-panel#react-tabs-"+e).addClass("selected");
	}

	_createTapsHeader(props, index, selected){
		var panelId = "react-tabs-" + index;
		var tab = new Tab({children: props.name, id:index, panelId:panelId, setSelected: this.setSelected, selected:selected});
		return tab.build();
	}

	_createTapsPanel(props, index, selected){
		var id = "react-tabs-" + index;
		var children = this._createSwatches(props);
		var tabpan1 = new TabPanel({children:children, id: id, selected:selected});
		return tabpan1.build();
	}
}

mynewcolor.defaultProps = {
	openSelectStyle: {
		touchAaction: "none",
		userSelect: "none",
		"-webkit-user-drag": "none",
		"-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)"
	}
}

var Color = {
	newColor: mynewcolor,
};

export default Color
