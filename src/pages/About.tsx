import React from 'react';
import { Heart, Users, Star } from 'lucide-react';

function About() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Nossa História</h1>
            <p className="text-lg text-gray-600">
              A Liri liri lari la nasceu da paixão por moda e do desejo de trazer peças únicas
              e atemporais para nossos clientes. Desde 2020, temos nos dedicado a criar
              coleções que expressam personalidade e elegância.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <Heart className="w-12 h-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Paixão pela Moda</h3>
              <p className="text-gray-600">
                Criamos peças com amor e dedicação para você expressar seu estilo único
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <Users className="w-12 h-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Atendimento Personalizado</h3>
              <p className="text-gray-600">
                Nossa equipe está sempre pronta para ajudar você a encontrar o look perfeito
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <Star className="w-12 h-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Qualidade Premium</h3>
              <p className="text-gray-600">
                Utilizamos os melhores materiais para garantir durabilidade e conforto
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Nossos Valores
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Na Liri liri lari la, acreditamos que a moda vai além das tendências.
                É uma forma de expressão, de contar histórias e de fazer as pessoas se
                sentirem confiantes e especiais.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Sustentabilidade em nossa produção</li>
                <li>Valorização do talento local</li>
                <li>Inclusão e diversidade</li>
                <li>Transparência em nossas relações</li>
                <li>Compromisso com a qualidade</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;