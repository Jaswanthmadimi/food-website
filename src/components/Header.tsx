import React from 'react';
import { ShoppingCart, Utensils } from 'lucide-react';

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ cartItemCount, onCartClick }) => {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Utensils className="h-8 w-8 text-orange-500" />
          <h1 className="text-2xl font-bold text-gray-800">Spice Palace</h1>
        </div>
        
        <button
          onClick={onCartClick}
          className="relative flex items-center space-x-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
        >
          <ShoppingCart className="h-5 w-5" />
          <span className="font-medium">Cart</span>
          {cartItemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
              {cartItemCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};