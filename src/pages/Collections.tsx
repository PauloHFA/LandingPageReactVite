import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

function Collections() {
  const { addToCart } = useCart();

  const collections = [
    {
      name: "Coleção Outono",
      items: [
        {
          name: "Casaco Oversized",
          price: "R$ 399,90",
          image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b"
        },
        {
          name: "Suéter Tricot",
          price: "R$ 259,90",
          image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105"
        },
        {
          name: "Calça Wide Leg",
          price: "R$ 299,90",
          image: "https://images.unsplash.com/photo-1594633313593-bab3825d0caf"
        }
      ]
    },
    {
      name: "Coleção Casual",
      items: [
        {
          name: "T-shirt Básica",
          price: "R$ 99,90",
          image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
        },
        {
          name: "Jeans Mom",
          price: "R$ 259,90",
          image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246"
        },
        {
          name: "Blazer Boyfriend",
          price: "R$ 359,90",
          image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Nossas Coleções
        </h1>

        {collections.map((collection, index) => (
          <div key={index} className="mb-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">{collection.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {collection.items.map((item, itemIndex) => (
                <div key={itemIndex} className="bg-white rounded-xl shadow-lg overflow-hidden group">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity flex items-center justify-center">
                      <button 
                        onClick={() => addToCart(item)}
                        className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all px-6 py-3 bg-white text-black rounded-full flex items-center gap-2"
                      >
                        <ShoppingBag className="w-5 h-5" />
                        Adicionar ao Carrinho
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h3>
                    <p className="text-pink-600 font-medium">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Collections;