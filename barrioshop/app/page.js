'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [filter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  // Datos hardcodeados de tiendas para simplificar la subida de el coroto
  const stores = [
    {
      id: 'tienda1',
      name: 'La Trastienda',
      category: 'Abarrotes',
      emoji: '🏢',
      description: 'Tienda de abarrotes'
    },
    {
      id: 'tienda2',
      name: 'Cafe y Tela',
      category: 'Cafeteria',
      emoji: '☕',
      description: 'Cafe de la mas alta calidad'
    },
    {
      id: 'tienda3',
      name: 'Raices del campo',
      category: 'Productos',
      emoji: '🧴',
      description: 'Productos de limpieza y hogar'
    },
    {
      id: 'tienda4',
      name: 'Cositas y Mas',
      category: 'Dulceria',
      emoji: '🍬',
      description: 'Dulces y golosinas tradicionales'
    }
  ];

  // Filtrar tiendas
  const filteredStores = stores.filter(store => {
    const matchesFilter = filter === 'all' || store.category === filter;
    const matchesSearch = store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         store.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const categories = ['all', ...new Set(stores.map(store => store.category))];

  const handleStoreClick = (storeId) => {
    router.push(`/dashboard/stores/${storeId}`);
  };

  const handleLogin = () => {
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-800">BarrioShop</h1>
            </div>
            <button
              onClick={handleLogin}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-200"
            >
              Iniciar Sesión
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
             Compra directo a tus vecinos
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          ¡Apoya a los Tenderos de tu Barrio!
          </p>
        </div>

      
        {/* Filtros */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Descubre Nuestras Tiendas</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Buscar tiendas
              </label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar por nombre o descripción..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 placeholder:text-gray-400 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Tiendas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStores.map((store) => (
            <div key={store.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-200 transform hover:scale-105">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl">{store.emoji}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{store.name}</h3>
                <p className="text-gray-600 mb-4">{store.description}</p>
                
                <div className="flex justify-between items-center">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {store.category}
                  </span>
                  <button
                    onClick={() => handleStoreClick(store.id)}
                    className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-200"
                  >
                    Ver Productos
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredStores.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No se encontraron tiendas</h3>
            <p className="text-gray-600">Intenta ajustar los filtros o términos de búsqueda</p>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2024 BarrioShop. Todos los derechos reservados.
            </p>
            <p className="text-gray-400 mt-2">
              Apoyando el comercio local, un barrio a la vez.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
