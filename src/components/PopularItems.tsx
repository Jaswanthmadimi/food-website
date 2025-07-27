import React from 'react';
import { Star, TrendingUp } from 'lucide-react';
import { MenuItem } from '../types';

interface PopularItemsProps {
  items: (MenuItem & { purchaseCount: number })[];
}

export const PopularItems: React.FC<PopularItemsProps> = ({ items }) => {
  if (items.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <div className="flex items-center space-x-2 mb-4">
          <TrendingUp className="h-6 w-6 text-orange-500" />
          <h2 className="text-xl font-bold text-gray-800">Popular Items</h2>
        </div>
        <p className="text-gray-600">Start ordering to see popular items!</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6">
      <div className="flex items-center space-x-2 mb-4">
        <TrendingUp className="h-6 w-6 text-orange-500" />
        <h2 className="text-xl font-bold text-gray-800">Most Popular Items</h2>
      </div>
      
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={item.id} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-center w-8 h-8 bg-orange-500 text-white rounded-full font-bold text-sm">
              {index + 1}
            </div>
            
            <img
              src={item.image}
              alt={item.name}
              className="w-12 h-12 object-cover rounded-lg"
            />
            
            <div className="flex-1">
              <h3 className="font-medium text-gray-800">{item.name}</h3>
              <p className="text-sm text-gray-600">Ordered {item.purchaseCount} times</p>
            </div>
            
            <div className="flex items-center space-x-1 text-orange-500">
              <Star className="h-4 w-4 fill-current" />
              <span className="text-sm font-medium">₹{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};