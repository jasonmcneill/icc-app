import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, Users } from "lucide-react";

const HomePage = () => {
  const menuItems = [
    {
      title: "First Principles",
      description: "Core beliefs and foundational teachings",
      icon: BookOpen,
      href: "https://firstprinciples.mobi/?utm_source=usd21-app"
    },
    {
      title: "Invites",
      description: "Share your faith by sending digital invites to church-related events",
      icon: Users,
      href: "https://invites.mobi/?utm_source=usd21-app"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header Section */}
      <div className="bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">USD21</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Welcome to the International Christian Churches community platform
          </p>
        </div>
      </div>

      {/* Main Menu Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-foreground">
            Quick Access
          </h2>
          
          <div className="space-y-4">
            {menuItems.map((item, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-soft transition-all duration-300 hover:-translate-y-1 border-border/50"
              >
                <Button 
                  variant="ghost" 
                  className="w-full h-auto p-0 flex items-start text-left justify-start hover:bg-transparent group"
                  onClick={() => {
                    window.open(item.href, "_blank", "noopener,noreferrer");
                  }}
                >
                  <div className="flex items-center w-full">
                    <div className="bg-primary/10 p-3 rounded-lg mr-4 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-8 text-muted-foreground border-t border-border/50">
        <p className="text-sm">
          © {new Date().getFullYear()}{" "}
          <a 
            href="https://usd21.org/?utm_source=usd21-app"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline transition-all"
          >
            International Christian Churches
          </a>
          . All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default HomePage;