
import "./dialog.scss";

const Dialog  = ({open, children}) => {



	

	if (open) {
		return (
		
		

		<div 
			className="overlay-pane dialog ui-widget ui-widget-content ui-front"
			style={{border: "1px solid black", backgroundColor:"#ffffff"}}
			tabIndex="-1"
			role="dialog"
		>
			<div className="extaDialog" style={{height: "50vh"}}>
				{children}
			</div>
			

		</div>

		

	);
	}

	return (
		<></>
	);
}


/*

class Dialog {

	options = {
		appendTo: "body",
		autoOpen: true,
		buttons: [],
		classes: {
			"ui-dialog": "ui-corner-all",
			"ui-dialog-titlebar": "ui-corner-all"
		},
		closeOnEscape: true,
		closeText: "Close",
		draggable: true,
		hide: null,
		height: "auto",
		maxHeight: null,
		maxWidth: null,
		minHeight: 150,
		minWidth: 150,
		modal: false,
		position: {
			my: "center",
			at: "center",
			of: window,
			collision: "fit",

			// Ensure the titlebar is always visible
			using: function( pos ) {
				var topOffset = jQuery( this ).css( pos ).offset().top;
				if ( topOffset < 0 ) {
					jQuery( this ).css( "top", pos.top - topOffset );
				}
			}
		},
		resizable: true,
		show: null,
		title: null,
		width: 300,

		// Callbacks
		beforeClose: null,
		close: null,
		drag: null,
		dragStart: null,
		dragStop: null,
		focus: null,
		open: null,
		resize: null,
		resizeStart: null,
		resizeStop: null
	};

	create(element) {
		this._createWrapper(element);
	}

	_createWrapper(element) {
		this.uiDialog = jQuery( "<div>" )
			.hide()
			.attr( {
				// Setting tabIndex makes the div focusable
				tabIndex: -1,
				role: "dialog"
			} )
			.appendTo( element );

		this.uiDialog.css({border: "1px solid black", backgroundColor:"#ffffff"});



		this.uiDialog.addClass( "ui-dialog", "ui-widget ui-widget-content ui-front" );
	}

	setContent(content) {
		this.uiDialog.html("");
		this.uiDialog.append(content);
		//this.open();
	}

	open() {
		if ( this._isOpen ) {
			if ( this._moveToTop() ) {
				this._focusTabbable();
			}
			return;
		}

		this._isOpen = true;
		this._size();
		this._position();
		this._createOverlay();
		this._moveToTop( null, true );

		this._show( this.uiDialog, this.options.show, function() {} );
	}

	close() {
		if ( !this._isOpen) {
			return;
		}

		this._isOpen = false;
		this._focusedElement = null;

		this._hide( this.uiDialog, this.options.hide, function() {} );
	}

	_show(element, option, next) {
		jQuery( element ).show( option, next());
	}

	_hide(element, option, next) {
		jQuery( element ).hide( option, next());
	}

	_size() {

		// If the user has resized the dialog, the .ui-dialog and .ui-dialog-content
		// divs will both have width and height set, so we need to reset them
		var options = this.options;

		if ( options.minWidth > options.width ) {
			options.width = options.minWidth;
		}

		// Reset wrapper sizing
		// determine the height of all the non-content elements
		this.uiDialog.css({
			height: "auto",
			width: options.width
		});
	}

	_position() {

		this.uiDialog.css({
			position: "absolute",
			height: "auto",
			width: "238px",
			"z-index": "99999999999999999",
			"top": "330px"
		});

		// Need to show the dialog to get the actual offset in the position plugin
		var isVisible = this.uiDialog.is( ":visible" );
		if ( !isVisible ) {
			this.uiDialog.show();
		}
		this.uiDialog.position( this.options.position );
		if ( !isVisible ) {
			this.uiDialog.hide();
		}
	}

	_createOverlay() {
		if ( !this.options.modal ) {
			return;
		}

		// We use a delay in case the overlay is created from an
		// event that we're going to be cancelling (#2804)
		var isOpening = true;
		this._delay( function() {
			isOpening = false;
		} );

		if ( !this.document.data( "ui-dialog-overlays" ) ) {

			// Prevent use of anchors and inputs
			// This doesn't use `_on()` because it is a shared event handler
			// across all open modal dialogs.
			this.document.on( "focusin.ui-dialog", function( event ) {
				if ( isOpening ) {
					return;
				}

				var instance = this._trackingInstances()[ 0 ];
				if ( !instance._allowInteraction( event ) ) {
					event.preventDefault();
					instance._focusTabbable();
				}
			}.bind( this ) );
		}

		this.overlay = jQuery( "<div>" )
			.appendTo( this._appendTo() );

		this._addClass( this.overlay, null, "ui-widget-overlay ui-front" );
		this._on( this.overlay, {
			mousedown: "_keepFocus"
		} );
		this.document.data( "ui-dialog-overlays",
			( this.document.data( "ui-dialog-overlays" ) || 0 ) + 1 );
	}

	_moveToTop( event, silent ) {
		var moved = false,
			zIndices = this.uiDialog.siblings( ".ui-front:visible" ).map( function() {
				return +jQuery( this ).css( "z-index" );
			} ).get(),
			zIndexMax = Math.max.apply( null, zIndices );

		if ( zIndexMax >= +this.uiDialog.css( "z-index" ) ) {
			this.uiDialog.css( "z-index", zIndexMax + 1 );
			moved = true;
		}

		if ( moved && !silent ) {
			this._trigger( "focus", event );
		}
		return moved;
	}

	_focusTabbable() {

		// Set focus to the first match:
		// 1. An element that was focused previously
		// 2. First element inside the dialog matching [autofocus]
		// 3. Tabbable element inside the content element
		// 4. Tabbable element inside the buttonpane
		// 5. The close button
		// 6. The dialog itself
		var hasFocus = this._focusedElement;
		if ( !hasFocus ) {
			hasFocus = this.element.find( "[autofocus]" );
		}
		if ( !hasFocus.length ) {
			hasFocus = this.element.find( ":tabbable" );
		}
		if ( !hasFocus.length ) {
			hasFocus = this.uiDialogButtonPane.find( ":tabbable" );
		}
		if ( !hasFocus.length ) {
			hasFocus = this.uiDialogTitlebarClose.filter( ":tabbable" );
		}
		if ( !hasFocus.length ) {
			hasFocus = this.uiDialog;
		}
		hasFocus.eq( 0 ).trigger( "focus" );
	}


}
*/



export default Dialog;
