'use client';
import { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';

export default function StoreProducts() {
  const router = useRouter();
  const params = useParams();
  const { storeId } = params;
  const [filter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Datos hardcodeados de las tiendas actualizados
  const stores = {
    tienda1: {
      name: 'La Trastienda',
      category: 'Abarrotes',
      emoji: '🏢',
      description: 'Tienda de abarrotes'
    },
    tienda2: {
      name: 'Cafe y Tela',
      category: 'Cafeteria',
      emoji: '☕',
      description: 'Cafe de la mas alta calidad'
    },
    tienda3: {
      name: 'Raices del campo',
      category: 'Productos',
      emoji: '🧴',
      description: 'Productos de limpieza y hogar'
    },
    tienda4: {
      name: 'Cositas y Mas',
      category: 'Dulceria',
      emoji: '🍬',
      description: 'Dulces y golosinas tradicionales'
    }
  };

  // Productos hardcodeados por tienda actualizados
  const products = {
    tienda1: [
      {
        id: 1,
        name: 'Arroz',
        price: 3000,
        category: 'granos',
        image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop',
        description: 'Arroz blanco de alta calidad'
      },
      {
        id: 2,
        name: 'Frijoles',
        price: 2500,
        category: 'granos',
        image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop',
        description: 'Frijoles negros frescos'
      },
      {
        id: 3,
        name: 'Aceite',
        price: 8000,
        category: 'condimentos',
        image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=300&fit=crop',
        description: 'Aceite de cocina'
      },
      {
        id: 4,
        name: 'Azúcar',
        price: 2000,
        category: 'endulzantes',
        image: 'https://images.unsplash.com/photo-1581441363689-1f3c3c414635?w=400&h=300&fit=crop',
        description: 'Azúcar refinada'
      },
      {
        id: 5,
        name: 'Sal',
        price: 1500,
        category: 'condimentos',
        image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=300&fit=crop',
        description: 'Sal de mesa'
      },
      {
        id: 6,
        name: 'Harina',
        price: 3500,
        category: 'granos',
        image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop',
        description: 'Harina de trigo'
      }
    ],
    tienda2: [
      {
        id: 1,
        name: 'Café Americano',
        price: 3000,
        category: 'cafe',
        image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop',
        description: 'Café americano tradicional'
      },
      {
        id: 2,
        name: 'Cappuccino',
        price: 4000,
        category: 'cafe',
        image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop',
        description: 'Cappuccino con espuma'
      },
      {
        id: 3,
        name: 'Té Verde',
        price: 2500,
        category: 'te',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
        description: 'Té verde natural'
      },
      {
        id: 4,
        name: 'Café con Leche',
        price: 3500,
        category: 'cafe',
        image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop',
        description: 'Café con leche cremoso'
      },
      {
        id: 5,
        name: 'Té Negro',
        price: 2000,
        category: 'te',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
        description: 'Té negro tradicional'
      },
      {
        id: 6,
        name: 'Café Expresso',
        price: 2500,
        category: 'cafe',
        image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop',
        description: 'Café expresso intenso'
      }
    ],
    tienda3: [
      {
        id: 1,
        name: 'Detergente',
        price: 8000,
        category: 'limpieza',
        image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=300&fit=crop',
        description: 'Detergente para ropa'
      },
      {
        id: 2,
        name: 'Jabón Líquido',
        price: 5000,
        category: 'limpieza',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
        description: 'Jabón líquido para manos'
      },
      {
        id: 3,
        name: 'Papel Higiénico',
        price: 3000,
        category: 'hogar',
        image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=300&fit=crop',
        description: 'Papel higiénico suave'
      },
      {
        id: 4,
        name: 'Desinfectante',
        price: 6000,
        category: 'limpieza',
        image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=300&fit=crop',
        description: 'Desinfectante multiusos'
      },
      {
        id: 5,
        name: 'Escoba',
        price: 4000,
        category: 'hogar',
        image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=300&fit=crop',
        description: 'Escoba de cerdas suaves'
      },
      {
        id: 6,
        name: 'Trapo',
        price: 2000,
        category: 'hogar',
        image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=300&fit=crop',
        description: 'Trapo de limpieza'
      }
    ],
    tienda4: [
      {
        id: 1,
        name: 'Chocolate',
        price: 2000,
        category: 'dulces',
        image: 'https://images.unsplash.com/photo-1548907040-4baa419d2b2b?w=400&h=300&fit=crop',
        description: 'Chocolate negro premium'
      },
      {
        id: 2,
        name: 'Caramelos',
        price: 1000,
        category: 'dulces',
        image: 'https://images.unsplash.com/photo-1553452118-621e1f860f43?w=400&h=300&fit=crop',
        description: 'Caramelos surtidos'
      },
      {
        id: 3,
        name: 'Galletas',
        price: 3000,
        category: 'dulces',
        image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=300&fit=crop',
        description: 'Galletas caseras'
      },
      {
        id: 4,
        name: 'Chupetas',
        price: 500,
        category: 'dulces',
        image: 'https://images.unsplash.com/photo-1553452118-621e1f860f43?w=400&h=300&fit=crop',
        description: 'Chupetas de colores'
      },
      {
        id: 5,
        name: 'Bombones',
        price: 4000,
        category: 'dulces',
        image: 'https://images.unsplash.com/photo-1548907040-4baa419d2b2b?w=400&h=300&fit=crop',
        description: 'Bombones artesanales'
      },
      {
        id: 6,
        name: 'Gomitas',
        price: 1500,
        category: 'dulces',
        image: 'https://images.unsplash.com/photo-1553452118-621e1f860f43?w=400&h=300&fit=crop',
        description: 'Gomitas de frutas'
      }
    ]
  };

  const store = stores[storeId];
  const storeProducts = products[storeId] || [];

  // Filtrar productos
  const filteredProducts = storeProducts.filter(product => {
    const matchesFilter = filter === 'all' || product.category === filter;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP'
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
      <div className="bg-white shadow-lg border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => router.back()}
                className="text-gray-600 hover:text-gray-800"
              >
                ← Volver
              </button>
              <div className="flex items-center space-x-3">
                <span className="text-3xl">{store?.emoji}</span>
                <div>
                  <h1 className="text-xl font-bold text-gray-800">{store?.name}</h1>
                  <p className="text-sm text-gray-600">{store?.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Buscar productos
              </label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar por nombre o descripción..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 bg-gray-200">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop';
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-blue-600">{formatPrice(product.price)}</span>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                    Agregar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No se encontraron productos</h3>
            <p className="text-gray-600">Intenta ajustar los filtros o términos de búsqueda</p>
          </div>
        )}
      </div>
    </div>
  );
}
