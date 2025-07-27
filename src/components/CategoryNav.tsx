import React from 'react';
import { menuCategories } from '../data/menuData';

interface CategoryNavProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export const CategoryNav: React.FC<CategoryNavProps> = ({ activeCategory, onCategoryChange }) => {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-16 z-30">
      <div className="container mx-auto px-4">
        <div className="flex space-x-1 overflow-x-auto py-4">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                activeCategory === category.id
                  ? 'bg-orange-500 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <span className="text-lg">{category.emoji}</span>
              <span className="font-medium">{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};