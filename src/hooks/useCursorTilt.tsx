import { useCallback, useRef } from "react";

/**
 * Subtle cursor-based 3D tilt for any element.
 * Sets CSS variables --rx, --ry, --tx, --ty consumed by `.tilt-3d` (see index.css).
 */
export function useCursorTilt(maxDeg = 8) {
  const ref = useRef<HTMLDivElement | null>(null);

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      const ry = px * maxDeg * 2;
      const rx = -py * maxDeg * 2;
      el.style.setProperty("--rx", `${rx.toFixed(2)}deg`);
      el.style.setProperty("--ry", `${ry.toFixed(2)}deg`);
      el.style.setProperty("--tx", `${(px * 6).toFixed(2)}px`);
      el.style.setProperty("--ty", `${(py * 6 - 6).toFixed(2)}px`);
    },
    [maxDeg]
  );

  const onMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", `0deg`);
    el.style.setProperty("--ry", `0deg`);
    el.style.setProperty("--tx", `0px`);
    el.style.setProperty("--ty", `0px`);
  }, []);

  return { ref, onMouseMove, onMouseLeave };
}
