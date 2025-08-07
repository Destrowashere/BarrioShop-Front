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
      description: 'Productos de el campo'
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
        image: 'https://lastaquerias.com/wp-content/uploads/2024/08/frijoles-2048x1152.jpg',
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
        image: 'https://th.bing.com/th/id/R.db77927febc8fd9a56ecc377008acda3?rik=I9GdrSBF3UifeA&pid=ImgRaw&r=0',
        description: 'Azúcar refinada'
      },
      {
        id: 5,
        name: 'Sal',
        price: 1500,
        category: 'condimentos',
        image: 'https://tse1.explicit.bing.net/th/id/OIP.TrPktOKLg14FP533G4X_2AHaHa?r=0&cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3',
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
        name: 'Cafe Americano',
        price: 3000,
        category: 'cafe',
        image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop',
        description: 'Cafe americano tradicional'
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
        name: 'Te Verde',
        price: 2500,
        category: 'te',
        image: 'https://th.bing.com/th/id/R.2eb302e8ca9d280fb9b81e2105442c94?rik=I9%2buxVCpjaC0oQ&riu=http%3a%2f%2fblog.nutritienda.com%2fwp-content%2fuploads%2f2015%2f12%2fFotolia_63877102_Subscription_Monthly_M.jpg&ehk=JF07V0WgVvNAqzGswMiyPRxP8igm2lbKf91oUa4o3TE%3d&risl=&pid=ImgRaw&r=0',
        description: 'Té verde natural'
      },
      {
        id: 4,
        name: 'Cafe con Leche',
        price: 3500,
        category: 'cafe',
        image: 'https://tse3.mm.bing.net/th/id/OIP.UEIllrehWRTEA_B0G-AQcQHaHa?r=0&cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3',
        description: 'Cafe con leche cremoso'
      },
      {
        id: 5,
        name: 'Te Negro',
        price: 2000,
        category: 'te',
        image: 'https://tse2.mm.bing.net/th/id/OIP.7YXgmB71eSMTR6Oa0YL1JwHaE7?r=0&cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3',
        description: 'Te negro tradicional'
      },
      {
        id: 6,
        name: 'Cafe Expresso',
        price: 2500,
        category: 'cafe',
        image: 'https://tse3.mm.bing.net/th/id/OIP.0OZo4MxXXEiJgp85xwZcNAHaFS?r=0&cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3',
        description: 'Cafe expresso intenso'
      }
    ],
    tienda3: [
      {
        id: 1,
        name: 'Bulto de papa',
        price: 88000,
        category: 'Hogar',
        image: 'https://tse3.mm.bing.net/th/id/OIP.yoZPHX2aijbEiiRwN3OFYwHaHa?r=0&cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3',
        description: 'Bulto de papa sin limpiar'
      },
      {
        id: 2,
        name: 'Bulto de Maiz',
        price: 65000,
        category: 'Hogar',
        image: 'https://ceragro.com/wp-content/uploads/2021/10/Maiz.png',
        description: 'Bulto de maiz desgranado'
      },
      {
        id: 3,
        name: 'Libra de cafe',
        price: 6000,
        category: 'hogar',
        image: 'https://www.semana.com/resizer/FNrhx6BbiBRD9nipdCQbJ7KXs6o=/1200x646/filters:format(jpg):quality(50)/cloudfront-us-east-1.images.arcpublishing.com/semana/JINICSYNHFDKBKHNYTFN5MCEV4.jpg',
        description: 'Cafe de marca generico'
      }
    ],
    tienda4: [
      {
        id: 1,
        name: 'Chocolate',
        price: 2000,
        category: 'dulces',
        image: 'https://th.bing.com/th/id/R.8f1129031e0ae52164f073c62ff5b1fc?rik=7Keuajpu6PxxGg&pid=ImgRaw&r=0',
        description: 'Chocolate negro premium'
      },
      {
        id: 2,
        name: 'Gomitas trululu',
        price: 3000,
        category: 'dulces',
        image: 'https://th.bing.com/th/id/R.47a9635c4461ffc15b806f260f161775?rik=X%2bRaWHke38gKLg&pid=ImgRaw&r=0p',
        description: 'Gomitas trululu sabores'
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
        name: 'Bon bon Bum',
        price: 500,
        category: 'dulces',
        image: 'https://tse3.mm.bing.net/th/id/OIP.bciaRJeq85gI78aKLMvlOQHaHa?r=0&cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3',
        description: 'Bon bon Bum de sabores variados'
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg placeholder:text-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

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
