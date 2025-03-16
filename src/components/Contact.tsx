
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="bg-secondary/30">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="outline" className="mb-3">
            Get in Touch
          </Badge>
          <h2 className="text-3xl md:text-4xl font-medium mb-4">
            Let's work together
          </h2>
          <p className="text-muted-foreground">
            Have a project in mind or want to chat? Feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-xl font-medium mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="text-primary mt-1" size={20} />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a 
                    href="mailto:hello@example.com" 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    hello@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <MapPin className="text-primary mt-1" size={20} />
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">
                    San Francisco, California
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Input 
                    type="text" 
                    placeholder="Name" 
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <Input 
                    type="email" 
                    placeholder="Email" 
                    className="bg-background border-border"
                  />
                </div>
              </div>
              
              <Input 
                type="text" 
                placeholder="Subject" 
                className="bg-background border-border"
              />
              
              <Textarea 
                placeholder="Message" 
                className="bg-background border-border min-h-32"
              />
              
              <Button className="w-full sm:w-auto rounded-full px-8" type="submit">
                <Send size={16} className="mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
