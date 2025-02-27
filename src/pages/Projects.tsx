import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

function Projects() {
  const projects = [
    {
      title: "Créer et Héberger un portfolio",
      description: "Hébergement d'un Portfolio en ligne grâce à des outils comme Vercel, GitHub ou OVH.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
      tags: ["Git", "Web", "Bolt"],
      githubLink: "https://github.com/3nguer4nd/Portfolio",
      demoLink: "https://enguerand-ca.fr"
    },
    {
      title: "Plateforme de gestion de tickets",
      description: "Solution de helpdesk pour la gestion des demandes d'assistance informatique, avec suivi des incidents et base de connaissances intégrée.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
      tags: ["PHP", "MySQL", "Bootstrap", "jQuery"],
      githubLink: "#",
      demoLink: "#"
    },
    {
      title: "Infrastructure as Code",
      description: "Automatisation du déploiement d'une infrastructure complète (serveurs, réseau, sécurité) via des scripts et des outils de provisionnement.",
      image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
      tags: ["Ansible", "Terraform", "AWS", "Bash"],
      githubLink: "#",
      demoLink: "#"
    },
    {
      title: "Audit de sécurité automatisé",
      description: "Outil d'analyse automatique des vulnérabilités d'un système d'information avec génération de rapports détaillés et recommandations.",
      image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
      tags: ["Python", "Nmap", "OpenVAS", "Linux"],
      githubLink: "#",
      demoLink: "#"
    },
    {
      title: "Portail captif Wi-Fi",
      description: "Solution de portail captif pour réseaux Wi-Fi publics avec authentification, limitation de bande passante et journalisation des connexions.",
      image: "https://images.unsplash.com/photo-1487875961445-47a00398c267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
      tags: ["pfSense", "PHP", "JavaScript", "Radius"],
      githubLink: "#",
      demoLink: "#"
    },
    {
      title: "Système de sauvegarde distribué",
      description: "Solution de backup automatisé multi-sites avec chiffrement, déduplication et rotation des sauvegardes.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
      tags: ["Bash", "rsync", "Cron", "OpenSSL"],
      githubLink: "#",
      demoLink: "#"
    }
  ];

  return (
    <div className="py-12 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Mes Réalisations
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
            Une sélection de projets réalisés dans le cadre de mon alternance.
          </p>
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
                    <span>Voir</span>
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