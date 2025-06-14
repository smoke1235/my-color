import { memo, useCallback, useMemo } from "react";
import tinycolor from "tinycolor2";

import { useBoundingClientRect } from "../../hooks/use-bounding-client-rect";
import { Interactive } from "../interactive";

export const Hue = memo(({ color, disabled, onChange, onChangeComplete }) => {
	const [hueRef, { width }] = useBoundingClientRect();

	const position = useMemo(() => {
		const x = (color.toHsv().h / 360) * width;

		return { x };
	}, [color, width]);

	const updateColor = useCallback((final, x) => {
		const nextColor = tinycolor.fromRatio({
			...color.toHsv(),
			h: (x / width) * 360,
		});

		onChange(nextColor);
		if (final) onChangeComplete?.(nextColor);
	}, [color, width, onChange, onChangeComplete]);

	const hsl = useMemo(() => [color.toHsv().h, "100%", "50%"].join(" "), [color]);

	return (
		<Interactive disabled={disabled} onCoordinateChange={updateColor}>
			<div ref={hueRef} className="rcp-hue">
				<div style={{ left: position.x, backgroundColor: `hsl(${hsl})` }} className="rcp-hue-cursor" />
			</div>
		</Interactive>
	);
});