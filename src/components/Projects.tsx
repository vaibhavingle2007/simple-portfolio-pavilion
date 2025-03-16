
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imagePlaceholder: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Minimal E-commerce Platform",
    description: "A clean shopping experience with focus on typography and whitespace",
    tags: ["Design", "Development", "E-commerce"],
    imagePlaceholder: "bg-gray-200"
  },
  {
    id: 2,
    title: "Productivity Dashboard",
    description: "Intuitive interface for tracking daily tasks and goals",
    tags: ["UI/UX", "Web App", "React"],
    imagePlaceholder: "bg-gray-300"
  },
  {
    id: 3,
    title: "Travel Journal Application",
    description: "Simple, elegant way to document travel experiences",
    tags: ["Mobile", "Design", "Photography"],
    imagePlaceholder: "bg-gray-400"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="bg-secondary/30">
      <div className="section-container">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <Badge variant="outline" className="mb-3">
            My Work
          </Badge>
          <h2 className="text-3xl md:text-4xl font-medium mb-4">
            Selected Projects
          </h2>
          <p className="text-muted-foreground">
            A curated selection of my recent work, showcasing my design philosophy
            and development skills.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden border bg-card transition-all duration-300 hover:shadow-md">
              <div className={`aspect-video ${project.imagePlaceholder} transition-transform duration-500 hover:scale-105`} />
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <Badge variant="secondary" key={tag} className="font-normal text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <a 
                  href="#" 
                  className="text-sm font-medium text-primary inline-flex items-center transition-colors hover:text-primary/80"
                >
                  View Project
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
