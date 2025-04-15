
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`btn btn-dark rounded-circle position-fixed ${
        visible ? "d-flex" : "d-none"
      }`}
      style={{
        bottom: "20px",
        right: "20px",
        width: "45px",
        height: "45px",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
      }}
      aria-label="Scroll to top"
    >
      <FaArrowUp size={20} />
    </button>
  );
};

export default ScrollToTopButton;
