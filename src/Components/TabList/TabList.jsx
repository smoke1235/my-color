
import cx from 'classnames';


const TabList = ({ children, className }) => {

	return (
		<div className={cx(className)} role="tablist">
			{children}
		</div>
	)
}


TabList.defaultProps = {
	className: 'react-tabs__tab-list'
};

TabList.tabsRole = 'TabList';

export default TabList;
