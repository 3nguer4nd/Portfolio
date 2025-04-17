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
      githubLink: "https://github.com/3nguer4nd/E6/blob/master/Fiche%20E6%20Réalisation%20n°2.pdf",
      
    },
    {
      title: "ADDS",
      description: "Déploiement d’un Active Directory avec gestion centralisée des utilisateurs et ressources réseau",
      image: "https://images.pexels.com/photos/17485657/pexels-photo-17485657/free-photo-of-abstrait-technologie-rechercher-numerique.png?auto=compress&cs=tinysrgb&w=800",
      tags: ["AD", "Windows Server", "DHCP", "PowerShell"],
      githubLink: "https://github.com/3nguer4nd/Procedures-IT/blob/master/AD_WindowsServer2019.pdf",
      
    },
    {
      title: "GLPI - Gestion de parc informatique",
      description: "Mise en place complète d’un système de gestion des services informatiques (ITSM) avec GLPI, incluant l’installation d’un socle LAMP, la configuration d’Apache2, PHP-FPM, et la personnalisation de l’environnement selon les bonnes pratiques de sécurité.",
      image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
      tags: ["LAMP", "Debian12", "Apache2", "MariaDB"],
      githubLink: "https://github.com/3nguer4nd/Procedures-IT/blob/master/GLPI%20Debian12.pdf",
      
    },
    {
      title: "DHCP & DHCP Relay - Attribution d’adresses IP automatisée",
      description: "Déploiement complet d’une infrastructure DHCP avec une architecture composée de trois machines (serveur, routeur, client). Le serveur distribue les adresses IP, tandis que le routeur utilise un service DHCP Relay pour relayer les requêtes clients. L’ensemble est virtualisé sur VMware Workstation et connecté via des segments LAN pour simuler un environnement réel.",
      image: "https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["DHCP", "VMware Workstation", "Routage IP", "LAN Segment"],
      githubLink: "https://github.com/3nguer4nd/Procedures-IT/blob/master/DHCP%20RELAY.pdf",
    
    },
    {
      title: "WordPress - Déploiement et sauvegardes automatisées",
      description: "Mise en place complète d’un site WordPress auto-hébergé sous Debian 12 avec un certificat SSL auto-signé, une base de données MariaDB sécurisée, et un système de sauvegarde automatique du site et de la base via scripts bash et SFTP, incluant l’automatisation via cron et la suppression programmée des anciennes sauvegardes.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
      tags: ["Wordpress", "Sauvegarde", "SFTP", "Certificat SSL"],
      githubLink: "https://github.com/3nguer4nd/Procedures-IT/blob/master/Sauvegardes%20Wordpress%20sur%20Debian12.pdf",
      
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