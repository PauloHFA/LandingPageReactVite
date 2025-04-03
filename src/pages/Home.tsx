import React from 'react';
import { ShoppingBag, TrendingUp, Truck, CreditCard, Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  const collections = [
    {
      image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b",
      title: "Coleção Outono",
      description: "Peças elegantes para os dias mais frescos"
    },
    {
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050",
      title: "Coleção Casual",
      description: "Conforto e estilo para o dia a dia"
    },
    {
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
      title: "Coleção Festa",
      description: "Brilhe em ocasiões especiais"
    }
  ];

  const benefits = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Frete Grátis",
      description: "Para compras acima de R$ 299"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Até 10x sem juros",
      description: "Em todos os produtos"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Primeira Troca Grátis",
      description: "Em até 30 dias"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1469334031218-e382a71b716b"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>
        
        <div className="relative flex flex-col items-center justify-center h-full text-center text-white px-4">
          <ShoppingBag className="w-16 h-16 mb-6" />
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Liri liri lari la</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Descubra a nova coleção que vai transformar seu guarda-roupa
          </p>
          <Link
            to="/collections"
            className="px-8 py-4 bg-white text-black text-lg font-medium rounded-full hover:bg-gray-100 transition-colors"
          >
            Explorar Coleção
          </Link>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-gray-800 flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Collections Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nossas Coleções</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <Link to="/collections" key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                  <h3 className="text-2xl font-semibold mb-2">{collection.title}</h3>
                  <p className="text-sm opacity-90">{collection.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Fique por dentro das novidades</h2>
          <p className="mb-8 text-gray-300 max-w-2xl mx-auto">
            Cadastre-se para receber nossas ofertas exclusivas e lançamentos em primeira mão
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-white"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Cadastrar
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <ShoppingBag className="w-8 h-8 mr-3" />
              <span className="text-2xl font-bold">Liri liri lari la</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-gray-300 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400 text-sm">
            © 2025 Liri liri lari la. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;