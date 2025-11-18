import { Card } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import smartParkingImg from "@/assets/smart-parking.png";
import visdaImg from "@/assets/visda.png";
import sakeImg from "@/assets/sake.png";
import stockMarketImg from "@/assets/stockmarket.png";
import iiraImg from "@/assets/iira.png";

const Portfolio = () => {
  const projects = [
    {
      title: "Smart Parking System",
      year: "2024",
      category: "Web Application",
      description: "SIH Winner Project - A web application improving urban parking management with a simple, intuitive UI. Built with Flask and modern web technologies.",
      image: smartParkingImg,
      tags: ["Flask", "Python", "UI/UX", "Winner Project"],
      github: "https://github.com/rishi-choudhary"
    },
    {
      title: "Visda Organix",
      year: "2024",
      category: "E-commerce",
      description: "Complete Shopify website built from scratch using Liquid, featuring organic skincare products. Fully mobile-optimized with custom theme development.",
      image: visdaImg,
      tags: ["Shopify", "Liquid", "E-commerce", "Mobile-First"],
      link: "http://visdaorganix.com"
    },
    {
      title: "SAKE Clothing Brand",
      year: "2023",
      category: "UI/UX Design",
      description: "Modern UI/UX website design made using Figma & Canva, matching fashion branding aesthetics with bold typography and clean layouts.",
      image: sakeImg,
      tags: ["Figma", "Canva", "Branding", "Fashion"],
      link: "https://www.figma.com/proto/HzhXJItPWNvEbqqa5zCyk7/SAKE?page-id=0%3A1&node-id=1-2&starting-point-node-id=1%3A2&t=WipSwaQrRhe9jthn-1"
    },
    {
      title: "StockMarket Simulator",
      year: "2024",
      category: "Web Application",
      description: "An interactive stock market simulation platform that allows users to practice trading strategies in a risk-free environment with real-time market data.",
      image: stockMarketImg,
      tags: ["Python", "Trading", "Simulation", "Finance"],
      github: "https://github.com/rishi-choudhary"
    },
    {
      title: "Adversarial-AI",
      year: "2024",
      category: "AI Application",
      description: "🧑‍⚖️ An AI-powered legal debate platform with pixel-art interface, built for IEEE's 'Pixel Palettes' hackathon by Team 17. Generates structured pro and con arguments using classical ML models and legal knowledge base. Because every argument deserves its day in court.",
      image: iiraImg,
      tags: ["AI", "Legal Tech", "ML", "Hackathon"],
      link: "http://adversarial-ai.onrender.com"
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <span className="section-label">Portfolio</span>
        <div className="grid md:grid-cols-2 gap-12 mt-8 mb-12">
          <div>
            <h2 className="text-5xl font-bold">
              Explore my portfolio of creative solutions
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-lg text-muted-foreground">
              Explore my portfolio full of creative solutions.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="overflow-hidden group cursor-pointer border-border/50 hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden bg-secondary">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{project.category}</span>
                  <span>{project.year}</span>
                </div>
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-1 bg-secondary text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  {project.link && (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Live
                    </a>
                  )}
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
