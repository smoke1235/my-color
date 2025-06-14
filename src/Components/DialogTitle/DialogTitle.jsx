
import {useId} from "react"

const DialogTitle = ({children, onClick}) => {

	let internalId = useId()
	let id = `dialog-title-${internalId}`;

	return (
		<div className="header">
			<div className="header-common-menu" id={id} onClick={onClick}>
				<div className="header-text">{children}</div>
				<div id="confirm-change-color" className="header-confirm-button">
					<span className="ed-icon-check"></span>
				</div>
			</div>
		</div>
	)
}

export default DialogTitle;