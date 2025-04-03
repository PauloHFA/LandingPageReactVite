import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

function Contact() {
  return (
    <div className="min-h-screen bg-orange-50 pt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8">
              <h1 className="text-4xl font-bold text-orange-800 text-center mb-12">
                Entre em Contato
              </h1>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div className="flex items-center space-x-4 text-gray-700">
                    <Phone className="w-6 h-6 text-orange-600" />
                    <div>
                      <h3 className="font-medium">Telefone</h3>
                      <p>(11) 99999-9999</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-gray-700">
                    <Mail className="w-6 h-6 text-orange-600" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p>contato@cuidadedog.org.br</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-gray-700">
                    <MapPin className="w-6 h-6 text-orange-600" />
                    <div>
                      <h3 className="font-medium">Endereço</h3>
                      <p>Rua dos Cães, 123 - São Paulo, SP</p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <h3 className="font-medium mb-4">Redes Sociais</h3>
                    <div className="flex space-x-4">
                      <a href="#" className="text-orange-600 hover:text-orange-700">
                        <Instagram className="w-6 h-6" />
                      </a>
                      <a href="#" className="text-orange-600 hover:text-orange-700">
                        <Facebook className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </div>
                
                <form className="space-y-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Nome"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Mensagem"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-colors"
                  >
                    Enviar Mensagem
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;