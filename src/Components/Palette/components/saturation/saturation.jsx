import { memo, useCallback, useMemo } from "react";
import tinycolor from "tinycolor2";

import { useBoundingClientRect } from "../../hooks/use-bounding-client-rect";
import { Interactive } from "../interactive";

export const Saturation = memo(({ height, color, disabled, onChange, onChangeComplete }) => {
	const [saturationRef, { width }] = useBoundingClientRect();

	const position = useMemo(() => {
		const x = (color.toHsv().s / 100) * width;
		const y = ((100 - color.toHsv().v) / 100) * height;

		return { x, y };
	}, [color, width, height]);

	const updateColor = useCallback((final, x, y) => {
		const nextColor = tinycolor.fromRatio({
			...color.toHsv(),
			s: (x / width) * 100,
			v: 100 - (y / height) * 100,
		});

		onChange(nextColor);
		if (final) onChangeComplete?.(nextColor);
	}, [color, width, height, onChange, onChangeComplete]);

	const hsl = useMemo(() => [color.toHsv().h, "100%", "50%"].join(" "), [color]);
	const rgb = useMemo(() => [color.toRgb().r, color.toRgb().g, color.toRgb().b].join(" "), [color]);

	return (
		<Interactive disabled={disabled} onCoordinateChange={updateColor}>
			<div ref={saturationRef} style={{ height, backgroundColor: `hsl(${hsl})` }} className="rcp-saturation">
				<div
					style={{ left: position.x, top: position.y, backgroundColor: `rgb(${rgb})` }}
					className="rcp-saturation-cursor"
				/>
			</div>
		</Interactive>
	);
});