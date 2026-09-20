"use client";

import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

const MAX_TILT = 11;
const HOVER_SCALE = 1.045;
const TOUCH_HOLD_MS = 400;

export const OptimizedTiltCard = ({
  children,
  className = "",
  style,
  onHoverChange,
}) => {
  const cardRef = useRef(null);
  const rafRef = useRef(null);
  const touchHideTimeoutRef = useRef(null);

  const [isTouchActive, setIsTouchActive] = useState(false);

  useEffect(() => {
    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
      if (touchHideTimeoutRef.current !== null) {
        clearTimeout(touchHideTimeoutRef.current);
      }
    };
  }, []);

  const applyVars = useCallback(
    (px, py, rotX, rotY, scale) => {
      const card = cardRef.current;
      if (!card) return;

      card.style.setProperty("--pointer-x", `${px}%`);
      card.style.setProperty("--pointer-y", `${py}%`);
      card.style.setProperty("--rotate-x", `${rotX}deg`);
      card.style.setProperty("--rotate-y", `${rotY}deg`);
      card.style.setProperty("--card-scale", `${scale}`);
    },
    []
  );

  // Shared by mouse AND touch so the math can never drift apart.
  const updateFromPoint = useCallback(
    (clientX, clientY) => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();

      const px = Math.max(
        0,
        Math.min(100, ((clientX - rect.left) / rect.width) * 100)
      );

      const py = Math.max(
        0,
        Math.min(100, ((clientY - rect.top) / rect.height) * 100)
      );

      const rotY = ((px - 50) / 50) * MAX_TILT;
      const rotX = ((py - 50) / 50) * -MAX_TILT;

      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() =>
        applyVars(px, py, rotX, rotY, HOVER_SCALE)
      );
    },
    [applyVars]
  );

  const resetTilt = useCallback(() => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = requestAnimationFrame(() => {
      const card = cardRef.current;
      if (!card) return;

      card.style.setProperty("--rotate-x", "0deg");
      card.style.setProperty("--rotate-y", "0deg");
      card.style.setProperty("--card-scale", "1");
    });
  }, []);

  const handleMouseMove = useCallback(
    (e) => {
      updateFromPoint(e.clientX, e.clientY);
    },
    [updateFromPoint]
  );

  const handleMouseLeave = useCallback(() => {
    resetTilt();
  }, [resetTilt]);

  const handleTouchStart = useCallback(
    (e) => {
      const touch = e.touches[0];
      if (!touch) return;

      if (touchHideTimeoutRef.current !== null) {
        clearTimeout(touchHideTimeoutRef.current);
        touchHideTimeoutRef.current = null;
      }

      updateFromPoint(touch.clientX, touch.clientY);
      setIsTouchActive(true);
      onHoverChange?.(true);
    },
    [updateFromPoint, onHoverChange]
  );

  const handleTouchMove = useCallback(
    (e) => {
      const touch = e.touches[0];
      if (!touch) return;

      updateFromPoint(touch.clientX, touch.clientY);
    },
    [updateFromPoint]
  );

  const handleTouchEnd = useCallback(() => {
    resetTilt();

    touchHideTimeoutRef.current = setTimeout(() => {
      setIsTouchActive(false);
      onHoverChange?.(false);
      touchHideTimeoutRef.current = null;
    }, TOUCH_HOLD_MS);
  }, [resetTilt, onHoverChange]);

  const cardStyle = {
    ...style,
    transform:
      "perspective(1000px) rotateX(var(--rotate-x, 0deg)) rotateY(var(--rotate-y, 0deg)) scale(var(--card-scale, 1))",
    transition: "transform 0.35s cubic-bezier(0.23, 1, 0.32, 1)",
    "--pointer-x": "50%",
    "--pointer-y": "50%",
    "--rotate-x": "0deg",
    "--rotate-y": "0deg",
    "--card-scale": "1",
    WebkitTapHighlightColor: "transparent",
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
      className={`relative group touch-manipulation ${className}`}
      style={cardStyle}
    >
      {/* Light sheen & glow overlays clipped to card boundary */}
      <div className="pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden z-10">
        <div
          className={`absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 mix-blend-overlay ${
            isTouchActive ? "opacity-100" : ""
          }`}
          style={{
            background:
              "radial-gradient(circle at var(--pointer-x) var(--pointer-y), rgba(167,139,250,0.35) 0%, transparent 80%)",
          }}
        />

        <div
          className={`absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100 ${
            isTouchActive ? "opacity-100" : ""
          }`}
          style={{
            background:
              "radial-gradient(circle 90px at var(--pointer-x) var(--pointer-y), rgba(167,139,250,0.05), transparent 70%)",
          }}
        />
      </div>

      {children}
    </div>
  );
};

export default OptimizedTiltCard;
