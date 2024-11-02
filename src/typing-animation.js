"use client";

import { useEffect, useState, useCallback } from "react";
import { cn } from "./lib/utils";

const TypingAnimation = ({
  text,
  className,
  minSpeed = 50,
  maxSpeed = 150,
  startDelay = 500,
  cursorBlinkSpeed = 530,
  loop = false,
  loopDelay = 2000,
  onComplete,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  const getRandomSpeed = useCallback(() => {
    return Math.floor(Math.random() * (maxSpeed - minSpeed) + minSpeed);
  }, [minSpeed, maxSpeed]);

  const resetAnimation = useCallback(() => {
    setDisplayedText("");
    setIsTyping(false);
  }, []);

  useEffect(() => {
    // Start delay
    const startTimeout = setTimeout(() => {
      setIsTyping(true);
    }, startDelay);

    return () => clearTimeout(startTimeout);
  }, [startDelay]);

  // Typing effect
  useEffect(() => {
    if (!isTyping) return;

    let currentIndex = displayedText.length;

    if (currentIndex === text.length) {
      setIsTyping(false);
      onComplete?.();

      if (loop) {
        const loopTimeout = setTimeout(() => {
          resetAnimation();
          setIsTyping(true);
        }, loopDelay);
        return () => clearTimeout(loopTimeout);
      }
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayedText(text.substring(0, currentIndex + 1));
    }, getRandomSpeed());

    return () => clearTimeout(timeout);
  }, [displayedText, text, isTyping, getRandomSpeed, loop, loopDelay, onComplete, resetAnimation]);

  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, cursorBlinkSpeed);

    return () => clearInterval(cursorInterval);
  }, [cursorBlinkSpeed]);

  return (
    <div className={cn(
      "font-display text-center font-[500] text-4xl leading-[5rem] tracking-[-0.02em] drop-shadow-sm",
      className
    )}>
      <span>{displayedText}</span>
      <span 
        className={cn(
          "ml-1 inline-block w-[2px] h-[1em] bg-current align-middle",
          showCursor ? "opacity-100" : "opacity-0",
          "transition-opacity duration-100"
        )}
        aria-hidden="true"
      />
    </div>
  );
};

export default TypingAnimation;