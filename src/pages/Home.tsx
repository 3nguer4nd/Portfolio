import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

interface HomeProps {
  setCurrentPage: (page: string) => void;
}

function Home({ setCurrentPage }: HomeProps) {
  return (
    <div className="relative bg-dark overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-dark sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block">Étudiant en</span>
                <span className="block text-primary">BTS SIO SISR</span>
              </h1>
              <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Passionné par les réseaux et la sécurité informatique, je développe des solutions innovantes pour répondre aux défis technologiques d'aujourd'hui.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <button
                    onClick={() => setCurrentPage('contact')}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-colors md:py-4 md:text-lg md:px-10"
                  >
                    Me contacter
                  </button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <button
                    onClick={() => setCurrentPage('projects')}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-light bg-dark-lighter hover:bg-dark-light transition-colors md:py-4 md:text-lg md:px-10"
                  >
                    Voir mes projets
                  </button>
                </div>
              </div>
              <div className="mt-8 flex justify-center lg:justify-start space-x-6">
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <Github size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
          alt="Illustration style dessin de technologie"
        />
      </div>
    </div>
  );
}

export default Home;