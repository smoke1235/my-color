import jQuery from "jquery";
import map from 'lodash/map'
import Swatch from './swatch';
import EditableInput from "./EditableInput";
import Dialog from './dialog';
import Tab from './tabs/Tab';
import TabList from "./tabs/TabList";
import TabPanel from "./tabs/TabPanel";
import Tabs from "./tabs/Tabs";
import tinycolor from "tinycolor2";



class mynewcolor {
	constructor(element, opts) {

		this.element = element;
		this.body = jQuery("body");
		this.options = opts;
		this.diaOpen = false;
		this.color = "#000000";
		this.folieon = true;
		this.folie = false;
		this.useFolie = false;
		this.doc = element.prop("ownerDocument");

		this.handleChange = this.handleChange.bind(this);
		this.clickout = this.clickout.bind(this);

		this._createWrapper();
		this._createDialog();
		this._createTaps();
	}

	handleChange(color, folie) {
		this.color = color;
		this.folie = folie;

		if (this.options.change) {
			this.options.change(color, folie);
		}

		if (!this.options.admin) {
			if (!folie) {
				this.setSelected("kleur");
				jQuery(".react-tabs__tab#folie").hide();
			}
			else {
				jQuery(".react-tabs__tab#folie").show();
			}
		}

		jQuery(".open-select").removeAttr( 'style' );

		if (!folie) {
			jQuery(".open-select").css(mynewcolor.defaultProps.openSelectStyle);
			jQuery(".open-select").css("background-color", color);
		}
		else {
			var tiny = tinycolor(color);
			jQuery(".open-select").css(mynewcolor.defaultProps.openSelectStyle);
			jQuery(".open-select").css("background-image", "linear-gradient(to right top, "+tiny.toRgbString()+", white)");
		}

		jQuery(".custom-option .color-input-input input").val(color);
		jQuery(".custom-option .color-input-chip").css("background-color", color);

		jQuery(".swatches div").removeClass("selected").html("");
		jQuery(".swatches div[title|='"+color+"']").addClass("selected").html('<i class="fas fa-check"></i>');

		if (this.diaOpen) {
			this.openDialog();
		}
	}

	openDialog() {
		if (this.diaOpen) {
			this.dia.close();

			if (this.options.hide) {
				this.options.hide(this.color, this.folie);
			}

			jQuery(this.doc).off("click", this.clickout);
		}
		else {
			this._createTaps();

			if (this.folie) {
				this.setSelected("folie");
			}
			else {
				this.setSelected("kleur");
			}

			this.dia.open();
			jQuery(this.doc).on("click", this.clickout);
		}

		this.diaOpen = !this.diaOpen;
	}

	setColor(color, folie) {
		this.color = color;
		this.folie = folie;

		if (!this.options.admin) {
			if (!this.useFolie) {
				this.setSelected("kleur");
				jQuery(".react-tabs__tab#folie").hide();
			}
			else {
				if (this.folie) {
					this.setSelected("folie");
				}
				else {
					this.setSelected("kleur");
				}

				jQuery(".react-tabs__tab#folie").show();
			}
		}

		jQuery(".open-select").removeAttr( 'style' );

		if (!folie) {
			jQuery(".open-select").css(mynewcolor.defaultProps.openSelectStyle);
			jQuery(".open-select").css("background-color", color);
		}
		else {
			var tiny = tinycolor(color);
			jQuery(".open-select").css(mynewcolor.defaultProps.openSelectStyle);
			jQuery(".open-select").css("background-image", "linear-gradient(to right top, "+tiny.toRgbString()+", white)");
		}

		jQuery(".custom-option .color-input-input input").val(color);
		jQuery(".custom-option .color-input-chip").css("background-color", color);

		jQuery(".swatches div").removeClass("selected").html("");
		jQuery(".swatches div[title|='"+color+"']").addClass("selected").html('<i class="fas fa-check"></i>');
	}

	getColor() {
		return this.color;
	}

	isFolieOn(on) {
		this.useFolie = on;

		if (!this.options.admin) {
			if (!on) {
				jQuery(".react-tabs__tab#folie").hide();
			}
			else {
				jQuery(".react-tabs__tab#folie").show();
			}
		}
		else {
			this.useFolie = true;
			jQuery(".react-tabs__tab#folie").show();
		}
	}

	clickout(e) {

		if (jQuery(e.target).hasClass("open-select") || jQuery(e.target).hasClass("customColor")) {
			e.preventDefault();
			return;
		}

		if (jQuery(e.target).hasClass("react-tabs__tab")) {
			e.preventDefault();
			return;
		}


		//this.openDialog();
	}

	_createSwatches(props){
		var colorPalette = props.palette;
		var folie = props.folie;
		var custom = props.custom;
		this.handleChange = this.handleChange.bind(this);

		var outerdiv = jQuery(document.createElement('div') );
		outerdiv.addClass("swatches-outer");
		var swatchdiv = jQuery(document.createElement('div') );
		swatchdiv.addClass("swatches");

		map(colorPalette, (c, i) => {
			var props = {
				key:i,
				color:c,
				hex:c,
				onClick: this.handleChange,
				folie: folie,
				selectedColor: this.color
			};
			var swatch = new Swatch(props);
			swatchdiv.append(swatch.build());
		});

		outerdiv.append(swatchdiv);

		if (custom) {
			var value = this.getColor();
			var editableInput = new EditableInput({label:" Kleurcode ", onChange:this.handleChange, value: value});
			outerdiv.append(editableInput.build());
		}

		return outerdiv;
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

			longpress : function () {},

			keydown : function () {},

			touchend : function () {},
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
		var folieon = this.useFolie;
		var i = 0;
		map(this.options.taps, (props, index) => {

			var selected = false;
			if (i == 0) {
				selected = true;
			}

			if (props.folie && folieon) {
				aaaaa.push(this._createTapsHeader(props, index, selected));
				bbbbb.push(this._createTapsPanel(props, index, selected));
			}
			else if (!props.folie)  {
				aaaaa.push(this._createTapsHeader(props, index, selected));
				bbbbb.push(this._createTapsPanel(props, index, selected));
			}

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

	_createTapsHeader(props, index, selected) {
		var panelId = "react-tabs-" + index;
		var tab = new Tab({children: props.name, id:index, panelId:panelId, setSelected: this.setSelected, selected:selected});
		return tab.build();
	}

	_createTapsPanel(props, index, selected) {
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
	},
	folieon:true
}

export default mynewcolor
