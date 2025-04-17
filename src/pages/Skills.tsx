import React from 'react';
import { Server, Shield, Code, Database, Globe, Terminal } from 'lucide-react';

function Skills() {
  const skills = [
    {
      title: "Administration Réseau",
      description: "Configuration et maintenance de réseaux d'entreprise, mise en place de solutions VPN, gestion de pare-feu.",
      icon: <Server className="h-10 w-10 text-primary" />,
      technologies: ["Cisco", "pfSense", "VLANs", "Routage"]
    },
    {
      title: "Cybersécurité",
      description: "Audit de sécurité, mise en place de solutions de protection, gestion des accès et des identités.",
      icon: <Shield className="h-10 w-10 text-primary" />,
      technologies: ["Kali Linux", "Wireshark", "Nmap", "Cryptographie"]
    },
    {
      title: "Développement",
      description: "Création d'applications web et mobiles, scripts d'automatisation, interfaces utilisateur.",
      icon: <Code className="h-10 w-10 text-primary" />,
      technologies: ["HTML/CSS", "JavaScript", "Python", "PHP"]
    },
    {
      title: "Bases de données",
      description: "Conception, optimisation et administration de bases de données relationnelles.",
      icon: <Database className="h-10 w-10 text-primary" />,
      technologies: ["MySQL", "SQL Server"]
    },
    {
      title: "Services Web",
      description: "Déploiement et maintenance de serveurs web, configuration de services cloud.",
      icon: <Globe className="h-10 w-10 text-primary" />,
      technologies: ["Apache", "Nginx", "Docker"]
    },
    {
      title: "Systèmes d'exploitation",
      description: "Administration de systèmes Windows Server et Linux, virtualisation, conteneurisation.",
      icon: <Terminal className="h-10 w-10 text-primary" />,
      technologies: ["Windows Server", "Linux", "Active Directory", "VMware"]
    }
  ];

  return (
    <div className="py-12 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Mes Compétences
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
            Spécialisé en infrastructure réseau et sécurité, avec des compétences complémentaires en audiovisuel et en développement.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, index) => (
              <div key={index} className="bg-dark-light rounded-lg shadow-lg p-6 border border-dark-lighter hover:border-primary transition-colors">
                <div className="flex justify-center items-center h-12 w-12 rounded-md bg-dark-lighter mx-auto">
                  {skill.icon}
                </div>
                <div className="mt-5 text-center">
                  <h3 className="text-lg font-medium text-white">{skill.title}</h3>
                  <p className="mt-2 text-base text-gray-400">
                    {skill.description}
                  </p>
                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    {skill.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 text-xs font-medium rounded-full bg-dark text-primary-light border border-primary">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;