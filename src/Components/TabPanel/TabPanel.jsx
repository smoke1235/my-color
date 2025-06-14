import cx from 'classnames';

const DEFAULT_CLASS = 'react-tabs__tab-panel';


const TabPanel = ({children, className, id, selected, selectedClassName, tabId}) => {

	const index = tabId + "" + id;
	return (
		<div
			className={cx(className, { [selectedClassName]: selected })}
			role="tabpanel"
			id={index}
			aria-labelledby={index}
		>
			{children}
		</div>
	)
}

TabPanel.defaultProps = {
	className: DEFAULT_CLASS,
	selectedClassName: `selected`,
};

TabPanel.tabsRole = 'TabPanel';

export default TabPanel;
