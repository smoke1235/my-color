import jQuery from "jquery";
import cx from 'classnames';
import Component from "../Component";

class TabList extends Component {
	constructor (props) {
		super(props);
	}

	build() {
		var { children, className} = this.props;

		var tabList = jQuery( "<div>" );
		tabList.addClass(cx(className));
		tabList.attr("role", "tablist");
		tabList.append(children);

		return tabList;
	}
}

TabList.defaultProps = {
	className: 'react-tabs__tab-list'
};

TabList.tabsRole = 'TabList';

export default TabList;
