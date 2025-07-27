import React from 'react';
import { Plus, Star } from 'lucide-react';
import { MenuItem } from '../types';

interface MenuItemCardProps {
  item: MenuItem;
  onAddToCart: (item: MenuItem) => void;
}

export const MenuItemCard: React.FC<MenuItemCardProps> = ({ item, onAddToCart }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-48 object-cover"
        />
        {item.popular && (
          <div className="absolute top-3 left-3 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
            <Star className="h-3 w-3 fill-current" />
            <span>Popular</span>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-800 mb-2">{item.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-orange-500">₹{item.price}</span>
          <button
            onClick={() => onAddToCart(item)}
            className="bg-orange-500 text-white p-2 rounded-lg hover:bg-orange-600 transition-colors"
          >
            <Plus className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};