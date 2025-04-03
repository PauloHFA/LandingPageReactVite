import React from 'react';
import { X, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, isCartOpen, toggleCart, removeFromCart, clearCart } = useCart();

  if (!isCartOpen) return null;

  const total = cart.reduce((acc, item) => {
    const price = parseFloat(item.price.replace('R$ ', '').replace(',', '.'));
    return acc + price;
  }, 0);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={toggleCart} />
      
      <div className="fixed inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-md">
          <div className="h-full flex flex-col bg-white shadow-xl">
            <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
              <div className="flex items-start justify-between">
                <h2 className="text-lg font-medium text-gray-900">Carrinho de compras</h2>
                <button
                  type="button"
                  className="text-gray-400 hover:text-gray-500"
                  onClick={toggleCart}
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="mt-8">
                {cart.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-12">
                    <ShoppingBag className="h-12 w-12 text-gray-400" />
                    <h3 className="mt-2 text-sm font-medium text-gray-900">Seu carrinho está vazio</h3>
                    <p className="mt-1 text-sm text-gray-500">Comece adicionando alguns produtos</p>
                  </div>
                ) : (
                  <div className="flow-root">
                    <ul className="-my-6 divide-y divide-gray-200">
                      {cart.map((item, index) => (
                        <li key={index} className="py-6 flex">
                          <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-center object-cover"
                            />
                          </div>

                          <div className="ml-4 flex-1 flex flex-col">
                            <div>
                              <div className="flex justify-between text-base font-medium text-gray-900">
                                <h3>{item.name}</h3>
                                <p className="ml-4">{item.price}</p>
                              </div>
                            </div>
                            <div className="flex-1 flex items-end justify-between text-sm">
                              <button
                                type="button"
                                className="font-medium text-pink-600 hover:text-pink-500"
                                onClick={() => removeFromCart(item.name)}
                              >
                                Remover
                              </button>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {cart.length > 0 && (
              <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Total</p>
                  <p>R$ {total.toFixed(2).replace('.', ',')}</p>
                </div>
                <div className="mt-6">
                  <button
                    onClick={clearCart}
                    className="w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-pink-600 hover:bg-pink-700"
                  >
                    Limpar Carrinho
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart; 