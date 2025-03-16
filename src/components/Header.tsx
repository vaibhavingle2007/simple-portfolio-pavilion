
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-lg",
        scrolled 
          ? "py-4 bg-background/80 shadow-sm" 
          : "py-6 bg-transparent"
      )}
    >
      <div className="section-container flex items-center justify-between">
        <a 
          href="#" 
          className="text-xl font-display font-medium transition-opacity hover:opacity-80"
        >
          Portfolio
        </a>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-10">
            {["Projects", "About", "Contact"].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
