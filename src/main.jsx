import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";
import Lenis from "lenis";

function AppWithSmoothScroll() {
  useEffect(() => {
    // Initialize Lenis globally
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      autoRaf: true // Handles animation loop automatically
    });

    // Cleanup on unmount
    return () => lenis.destroy();
  }, []);

  return (
    <>
      <App />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppWithSmoothScroll />
  </StrictMode>
);
