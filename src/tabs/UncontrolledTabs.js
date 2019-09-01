import jQuery from "jquery";
import cx from 'classnames';
import Component from "../Component";

class UncontrolledTabs extends Component {
	constructor(props) {
		super(props);
	}

	build() {
		var {
			children,
			className,
		} = this.props;

		var ucon = jQuery(document.createElement('div') );
		ucon.addClass(cx(className));
		ucon.attr("data-tabs",'true');
		ucon.append(children);

		return ucon;
	}
}

UncontrolledTabs.defaultProps = {
	className: 'react-tabs',
	focus: false,
};

UncontrolledTabs.tabNodes = [];

export default UncontrolledTabs;
