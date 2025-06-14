import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'


const DEFAULT_CLASS = 'react-tabs__tab';

const TabHeader = ({
	children, 
	className, 
	disabled, 
	disabledClassName, 
	id, 
	panelId, 
	selected, 
	selectedClassName, 
	setSelected,
	hasInfo = false
}) => {

	const onClick = () => {
		setSelected(id);
	}



	return (
		<div className={cx(className, {
				[selectedClassName]: selected,
				[disabledClassName]: disabled,
			})}
			role="tab"
			id={id}
			aria-selected={selected ? 'true' : 'false'}
			aria-disabled={disabled ? 'true' : 'false'}
			aria-controls={panelId}
			onClick={onClick}
		>
			{children}
			{hasInfo && (
				<span className="foil-info ng-tns-c101-12">
					<FontAwesomeIcon icon={faCircleInfo} size="xs" />
				</span>
			)}
		</div>
	)
}

TabHeader.defaultProps = {
	className: DEFAULT_CLASS,
	disabledClassName: `${DEFAULT_CLASS}--disabled`,
	focus: false,
	id: null,
	panelId: null,
	selected: false,
	selectedClassName: `selected`,
};

export default TabHeader;
