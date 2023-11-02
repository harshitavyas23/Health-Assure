import React, { useEffect } from "react";

function Footer() {
  useEffect(() => {
    const footer = document.getElementById("footer");

    const handleVisibility = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;

      // Show the footer by default if the page content doesn't require scrolling
      if (pageHeight <= windowHeight) {
        footer.classList.remove("hidden");
      } else {
        // Adjust this value to control when the footer becomes visible
        const threshold = windowHeight - footer.offsetHeight;

        if (scrollY > threshold) {
          footer.classList.remove("hidden");
        } else {
          footer.classList.add("hidden");
        }
      }
    };

    window.addEventListener("scroll", handleVisibility);
    window.addEventListener("resize", handleVisibility);

    handleVisibility(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleVisibility);
      window.removeEventListener("resize", handleVisibility);
    };
  }, []);

  return (
    <div
      className="fixed bottom-0 left-0 w-full p-4 bg-white dark:bg-gray-900 hidden"
      id="footer"
    >
      <div className="mx-auto max-w-screen-xl py-6 lg:py-8">
        I am the footer content
      </div>
    </div>
  );
}

export default Footer;
