import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const SplashScreen = ({ onFinish }) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [animateTitle, setAnimateTitle] = useState(false);
  const [expandCircle, setExpandCircle] = useState(false);

  useEffect(() => {
    // Start title animation after 500ms
    const titleTimer = setTimeout(() => setAnimateTitle(true), 100);

    // Set a timeout to trigger circle expansion and fade-out
    const expansionTimer = setTimeout(() => {
      setExpandCircle(true);
      setFadeOut(true);
    }, 2000);

    // Finish splash screen after animation ends
    const cleanupTimer = setTimeout(() => onFinish(), 3000);

    return () => {
      clearTimeout(titleTimer);
      clearTimeout(expansionTimer);
      clearTimeout(cleanupTimer);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-zinc-100 transition-opacity duration-500 ${
        fadeOut ? "opacity-100" : "opacity-100"
      } overflow-hidden`}
    >
      <div className="relative text-center">
        {/* Expanding Circle Overlay */}
        <div
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-900 rounded-full transition-all duration-500 ease-in-out ${
            expandCircle ? "scale-[150]" : "scale-0"
          }`}
          style={{
            width: "1em",
            height: "1em",
            zIndex: 10
          }}
        />

        {/* Animated Title */}
        <h1
          className={`uppercase relative text-3xl scale-y-0 md:text-7xl font-bold text-zinc-900 mb-4 tracking-wide ${
            animateTitle ? "animate-rubberPop" : ""
          }`}
        >
          Zyn
          <span
            className="inline-block bg-zinc-900 rounded-full"
            style={{
              width: "1em",
              height: "1em",
              lineHeight: "1em",
              textAlign: "center",
            }}
          >
            o
          </span>
          xis
        </h1>
        
        </div>
        <p className="absolute bottom-0 text-center">Loading....</p>
    </div>
  );
};

SplashScreen.propTypes = {
  onFinish: PropTypes.func.isRequired,
}

export default SplashScreen;