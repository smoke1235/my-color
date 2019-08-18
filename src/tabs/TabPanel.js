import jQuery from "jquery";
import cx from 'classnames';
import Component from "../Component";

const DEFAULT_CLASS = 'react-tabs__tab-panel';

class TabPanel extends Component {
	constructor(props) {
		super(props);
	}

	build() {
		const {
			children,
			className,
			id,
			selected,
			selectedClassName,
			tabId
		} = this.props;

		var tab = jQuery( "<div>" );
		tab.addClass(cx(className, {
			[selectedClassName]: selected
		}));

		tab.attr("role", "tabpanel");
		tab.attr("id", id);
		tab.attr("aria-labelledby", tabId);
		tab.append(children);

		return tab;
	}
}

TabPanel.defaultProps = {
	className: DEFAULT_CLASS,
	selectedClassName: `selected`,
};

TabPanel.tabsRole = 'TabPanel';

export default TabPanel;
