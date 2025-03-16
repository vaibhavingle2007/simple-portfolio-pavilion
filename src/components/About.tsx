
import React from "react";
import { Badge } from "@/components/ui/badge";

const skills = [
  "UI/UX Design", "Web Development", "React", "Tailwind CSS", 
  "TypeScript", "Responsive Design", "Minimalism", "User Research"
];

const About = () => {
  return (
    <section id="about">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            {/* Placeholder for profile image */}
            <div className="rounded-2xl overflow-hidden bg-secondary aspect-square max-w-md"></div>
          </div>
          
          <div className="order-1 md:order-2">
            <Badge variant="outline" className="mb-3">
              About Me
            </Badge>
            
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              Designer & Developer with a passion for minimal aesthetics
            </h2>
            
            <div className="space-y-4 text-muted-foreground mb-8">
              <p>
                I'm a designer and developer focused on creating clean, functional 
                digital experiences. My approach emphasizes simplicity, usability, 
                and attention to detail.
              </p>
              <p>
                With several years of experience, I've helped brands and businesses 
                present themselves through thoughtful design and intuitive interfaces.
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4">Skills & Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="font-normal">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
