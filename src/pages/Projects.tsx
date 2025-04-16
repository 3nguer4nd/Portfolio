import React from 'react';
import { ExternalLink, Github, FileText } from 'lucide-react';

function Projects() {
  const projects = [
    {
      title: "Créer et Héberger un portfolio",
      description: "Développement et mise en ligne d'un portfolio grâce à des outils comme Vercel, GitHub, OVH ou encore VisualStudio Code.",
      image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
      tags: ["Git", "Web", "Bolt"],
      githubLink: "https://github.com/3nguer4nd/Portfolio",
      demoLink: "https://enguerand-ca.fr"
    },
    {
      title: "NetGuard",
      description: "Solution visant à faciliter le déploiement et la gestion à distance des équipements réseau et audiovisuels avec des services sécurisés et un tableau de bord personnalisé.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
      tags: ["Proxmox", "Grafana", "LibreNMS", "PfSense"],
      githubLink: "https://github.com/3nguer4nd/RMON",
      demoLink: "#"
    },
    {
      title: "''",
      description: "''",
      image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
      tags: ["''", "''", "''", "''"],
      githubLink: "#",
      demoLink: "#"
    },
    {
      title: "''",
      description: "''",
      image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
      tags: ["''", "''", "''", "''"],
      githubLink: "#",
      demoLink: "#"
    },
    {
      title: "''",
      description: "''",
      image: "https://images.unsplash.com/photo-1487875961445-47a00398c267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
      tags: ["''", "''", "''", "''"],
      githubLink: "#",
      demoLink: "#"
    },
    {
      title: "''",
      description: "''",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
      tags: ["''", "''", "''", "''"],
      githubLink: "#",
      demoLink: "#"
    }
  ];

  return (
    <div className="py-12 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Mes Projets
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
            Une sélection de projets réalisés dans le cadre de ma formation et de mes expériences professionnelles.
          </p>
          
          <div className="mt-6 flex items-center justify-center space-x-4">
            <a
              href="/TabE5.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-primary rounded-md shadow-sm text-sm font-medium text-white bg-dark-light hover:bg-dark-lighter transition-colors"
            >
              <FileText className="mr-2 h-5 w-5 text-primary" />
              Tableau E5
            </a>
            <span className="text-gray-400">
              — Consultez mon Tableau de synthèse des réalisations professionnelles
            </span>
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="bg-dark-light rounded-lg overflow-hidden shadow-lg border border-dark-lighter hover:border-primary transition-colors">
              <div className="h-48 w-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 py-1 text-xs font-medium rounded-full bg-dark text-primary-light border border-primary">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between mt-4">
                  <a href={project.githubLink} className="flex items-center text-gray-300 hover:text-primary transition-colors">
                    <Github size={18} className="mr-1" />
                    <span>Code</span>
                  </a>
                  <a href={project.demoLink} className="flex items-center text-gray-300 hover:text-primary transition-colors">
                    <ExternalLink size={18} className="mr-1" />
                    <span>Démo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;