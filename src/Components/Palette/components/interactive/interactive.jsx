import React, { memo, useCallback } from "react";

import { useBoundingClientRect } from "../../hooks/use-bounding-client-rect";

function clamp(value, min, max) {
	return value < min ? min : value > max ? max : value;
}

function isTouch(event) {
	return "touches" in event;
}

export const Interactive = memo(({ onCoordinateChange, children, disabled }) => {
	const [interactiveRef, { width, height }, getPosition] = useBoundingClientRect();

	const move = useCallback((event, final = false) => {
		const { left, top } = getPosition();

		const x = clamp(event.clientX - left, 0, width);
		const y = clamp(event.clientY - top, 0, height);

		onCoordinateChange(final, x, y);
	}, [width, height, getPosition, onCoordinateChange]);

	const onStart = useCallback((event) => {
		if (!isTouch(event) && event.button !== 0) return;

		const onMove = (event) => {
			move(isTouch(event) ? event.touches[0] : event);
		};

		const onEnd = (event) => {
			move(isTouch(event) ? event.changedTouches[0] : event, true);

			document.removeEventListener(isTouch(event) ? "touchmove" : "mousemove", onMove, false);
			document.removeEventListener(isTouch(event) ? "touchend" : "mouseup", onEnd, false);
		};

		onMove(event);

		document.addEventListener(isTouch(event) ? "touchmove" : "mousemove", onMove, false);
		document.addEventListener(isTouch(event) ? "touchend" : "mouseup", onEnd, false);
	}, [move]);

	return (
		<div
			ref={interactiveRef}
			className="rcp-interactive"
			onMouseDown={onStart}
			onTouchStart={onStart}
			aria-disabled={disabled}
		>
			{children}
		</div>
	);
});