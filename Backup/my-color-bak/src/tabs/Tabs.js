import UncontrolledTabs from "./UncontrolledTabs";
import Component from "../Component";

class Tabs extends Component {
	constructor(props) {
		super(props);
	}

	build() {
		var uncontrolledTabs = new UncontrolledTabs(this.props);
		return uncontrolledTabs.build();
	}
}

Tabs.defaultProps = {
	defaultFocus: false,
	forceRenderTabPanel: false,
	selectedIndex: null,
	defaultIndex: null,
};

Tabs.displayName = "Tabs";

export default Tabs
