"use client";
import { useState, useRef, useEffect } from "react";
import { LinkTag } from "./Typography";

export default function DarkMode() {
  const [tooltip, setTooltip] = useState<{
    x: number;
    y: number;
    visible: boolean;
    fadeOut: boolean;
  }>({
    x: 0,
    y: 0,
    visible: false,
    fadeOut: false,
  });

  const buttonRef = useRef<HTMLButtonElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const fadeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Function to handle the tooltip display and auto-removal
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // Stop event propagation to prevent immediate dismissal

    const buttonRect = buttonRef.current?.getBoundingClientRect();
    if (!buttonRect) return;

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const tooltipWidth = 180; // Approximate width of tooltip
    const tooltipHeight = 120; // Approximate height of tooltip

    let newX: number;
    let newY = e.clientY - 20; // Default: slightly above the cursor

    if (windowWidth < 1000) {
      // On small screens, place tooltip on the left
      newX = e.clientX - tooltipWidth - 20;
    } else {
      // Default: Place tooltip on the right
      newX = e.clientX + 20;
    }

    // Prevent overflow at the bottom
    if (newY + tooltipHeight > windowHeight) {
      newY = e.clientY - tooltipHeight - 20;
    }

    // Clear any existing timeouts
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (fadeTimeoutRef.current) clearTimeout(fadeTimeoutRef.current);

    // Reset tooltip state
    setTooltip({ x: newX, y: newY, visible: true, fadeOut: false });

    // Start fade out animation after 1.7 seconds
    fadeTimeoutRef.current = setTimeout(() => {
      setTooltip((prev) => ({ ...prev, fadeOut: true }));
    }, 1700);

    // Hide tooltip completely after 2 seconds
    timeoutRef.current = setTimeout(() => {
      setTooltip((prev) => ({ ...prev, visible: false, fadeOut: false }));
    }, 2000);
  };

  // Function to handle the fade out and removal
  const startFadeOutAndRemove = () => {
    // First start the fade out animation
    setTooltip((prev) => ({ ...prev, fadeOut: true }));

    // Then remove the tooltip after the animation completes
    setTimeout(() => {
      setTooltip((prev) => ({ ...prev, visible: false, fadeOut: false }));
    }, 300);
  };

  // Close tooltip when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        startFadeOutAndRemove();
      }
    };

    if (tooltip.visible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (fadeTimeoutRef.current) clearTimeout(fadeTimeoutRef.current);
    };
  }, [tooltip.visible]);

  // This effect ensures the auto-removal works every time the tooltip becomes visible
  useEffect(() => {
    if (tooltip.visible && !tooltip.fadeOut) {
      // Clear any existing timeouts first
      if (fadeTimeoutRef.current) clearTimeout(fadeTimeoutRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      // Start fade out animation after 1.7 seconds
      fadeTimeoutRef.current = setTimeout(() => {
        setTooltip((prev) => ({ ...prev, fadeOut: true }));
      }, 1700);

      // Hide tooltip completely after 2 seconds
      timeoutRef.current = setTimeout(() => {
        setTooltip((prev) => ({ ...prev, visible: false, fadeOut: false }));
      }, 2000);
    }

    return () => {
      // Clean up timeouts when component unmounts or tooltip changes
      if (fadeTimeoutRef.current) clearTimeout(fadeTimeoutRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [tooltip.visible]);

  return (
    <div className="relative flex items-center justify-center w-fit">
      <button ref={buttonRef} onClick={handleClick}>
        <LinkTag href="/" className="hover:no-underline">
          Dark Mode
        </LinkTag>
      </button>
      {tooltip.visible && (
        <div
          ref={tooltipRef}
          className={`absolute w-40 lg:w-80 bg-white rounded-lg shadow-lg transition-all duration-300 ease-in-out ${
            tooltip.fadeOut ? "opacity-0 scale-95" : "opacity-100 scale-100"
          }`}
          style={{
            top: tooltip.y,
            left: tooltip.x,
            position: "fixed",
            pointerEvents: "none", // Prevent mouse events on the tooltip
          }}
        >
          <img
            src="/darkmode-meme.jpg"
            alt="Tooltip"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      )}
    </div>
  );
}
