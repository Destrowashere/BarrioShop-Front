'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [activeView, setActiveView] = useState('home');
  const router = useRouter();

  const handleLogout = () => {
    router.push('/');
  };

  const handleStoreClick = (storeId) => {
    router.push(`/dashboard/stores/${storeId}`);
  };

  // Datos hardcodeados de tiendas actualizados
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-lg border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-800">BarrioShop</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsProfileModalOpen(true)}
                className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition-colors"
              >
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">A</span>
                </div>
                <span className="text-gray-700">Admin</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-lg min-h-screen">
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Navegación</h2>
            <nav className="space-y-2">
              <button
                onClick={() => setActiveView('home')}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  activeView === 'home' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                🏠 Inicio
              </button>
              <button
                onClick={() => setActiveView('stores')}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  activeView === 'stores' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                🏪 Tiendas
              </button>
            </nav>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="flex-1 p-8">
          {activeView === 'home' && (
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                  Compra directo a tus vecinos
                </h1>
                
                <div className="text-center mb-8">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    ¡Apoya a los Tenderos de tu Barrio!
                  </p>
                </div>

                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Descubre Nuestras Tiendas</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {stores.map((store) => (
                      <button
                        key={store.id}
                        onClick={() => handleStoreClick(store.id)}
                        className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all transform hover:scale-105"
                      >
                        <div className="text-2xl mb-2">{store.emoji}</div>
                        <h3 className="font-semibold">{store.name}</h3>
                        <p className="text-sm opacity-90">{store.description}</p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeView === 'stores' && (
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Todas las Tiendas</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {stores.map((store) => (
                  <div key={store.id} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <div className="text-4xl mb-4">{store.emoji}</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{store.name}</h3>
                    <p className="text-gray-600 mb-4">{store.description}</p>
                    <button
                      onClick={() => handleStoreClick(store.id)}
                      className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      Ver Productos
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Modal de Perfil */}
      {isProfileModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Perfil de Usuario</h2>
              <button
                onClick={() => setIsProfileModalOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="text-center mb-6 ">
              <div className="w-20 h-20 bg-blue-500 rounded-full mx-auto flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">A</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Administrador</h3>
              <p className="text-gray-600">admin@barrioshop.com</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-gray-600">Rol:</span>
                <span className="font-semibold text-black">Administrador</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-gray-600">Último acceso:</span>
                <span className="font-semibold text-black">Hoy</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600">Estado:</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">Activo</span>
              </div>
            </div>
            
            <div className="mt-6 flex space-x-4">
              <button
                onClick={handleLogout}
                className="flex-1 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors"
              >
                Cerrar Sesión
              </button>
              <button
                onClick={() => setIsProfileModalOpen(false)}
                className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition-colors"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
