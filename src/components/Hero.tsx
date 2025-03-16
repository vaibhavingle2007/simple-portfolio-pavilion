
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import SplineBackground from "./SplineBackground";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative">
      <SplineBackground />
      
      <div className="section-container relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <span className="text-sm uppercase tracking-widest text-muted-foreground mb-3 animate-fade-in">
            Welcome to my portfolio
          </span>
          
          <h1 className="text-4xl md:text-6xl font-medium mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Designer & Developer crafting minimal digital experiences
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
            I create clean, functional experiences focusing on simplicity and attention to detail for brands and businesses.
          </p>
          
          <div className="flex gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button asChild size="lg" className="rounded-full px-8">
              <a href="#projects">View projects</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8">
              <a href="#contact">Get in touch</a>
            </Button>
          </div>
        </div>
      </div>
      
      <a 
        href="#projects" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10"
        aria-label="Scroll down"
      >
        <ChevronDown size={24} className="text-muted-foreground" />
      </a>
    </section>
  );
};

export default Hero;
