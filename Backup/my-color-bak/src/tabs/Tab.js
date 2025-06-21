import jQuery from "jquery";
import cx from 'classnames';
import Component from "../Component";

var DEFAULT_CLASS = 'react-tabs__tab';

class Tab extends Component{
	constructor (props) {
		super(props);
		this.onClick = this.onClick.bind(this);
	}

	onClick(){
		this.props.setSelected(this.props.id);
	}

	build() {
		var {
			children,
			className,
			disabled,
			disabledClassName,
			id,
			panelId,
			selected,
			selectedClassName,
		} = this.props;

		var tab = jQuery( "<div>" );
		tab.addClass(cx(className, {
			[selectedClassName]: selected,
			[disabledClassName]: disabled,
		}));

		tab.attr("role", "tab");
		tab.attr("id", id);
		tab.attr("aria-selected", (selected ? 'true' : 'false'));
		tab.attr("aria-disabled", (disabled ? 'true' : 'false'));
		tab.attr("aria-controls", panelId);
		tab.on("click", this.onClick);
		tab.append(children);

		return tab;
	}
}

Tab.defaultProps = {
	className: DEFAULT_CLASS,
	disabledClassName: `${DEFAULT_CLASS}--disabled`,
	focus: false,
	id: null,
	panelId: null,
	selected: false,
	selectedClassName: `selected`,
};

export default Tab;
