import { useCallback, useLayoutEffect, useRef, useState } from "react";

const getElementDimensions = (element) => {
	const rect = element.getBoundingClientRect();

	return {
		width: rect.width,
		height: rect.height,
	};
};

export function useBoundingClientRect() {
	const ref = useRef(null);

	const [size, setSize] = useState({ width: 1, height: 1 });

	useLayoutEffect(() => {
		const onWindowResize = () => {
			if (!ref.current) return;

			setSize(getElementDimensions(ref.current));
		};

		const onElementResize = ([{ contentBoxSize }]) => {
			setSize({
				height: contentBoxSize[0].blockSize,
				width: contentBoxSize[0].inlineSize,
			});
		};

		window.addEventListener("resize", onWindowResize, false);

		const observer = new ResizeObserver(onElementResize);

		if (ref.current) observer.observe(ref.current);

		return () => {
			window.removeEventListener("resize", onWindowResize, false);
			observer.disconnect();
		};
	}, []);

	const getPosition = useCallback(() => {
		const { left = 1, right = 1, top = 1, bottom = 1 } = ref.current?.getBoundingClientRect() ?? ({});

		return { left, right, top, bottom };
	}, []);

	return [ref, size, getPosition];
}