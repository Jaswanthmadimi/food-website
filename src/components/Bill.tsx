import React from 'react';
import { CartItem } from '../types';

interface BillProps {
  order: {
    items: CartItem[];
    total: number;
    date: Date;
  };
  onClose: () => void;
}

export const Bill: React.FC<BillProps> = ({ order, onClose }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-60 flex justify-center items-center p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 overflow-auto max-h-full">
        <h2 className="text-2xl font-bold mb-4">Your Bill</h2>
        <p className="mb-2">Date: {order.date.toLocaleString()}</p>
        <ul className="mb-4">
          {order.items.map(item => (
            <li key={item.id} className="flex justify-between mb-1">
              <span>{item.name} x {item.quantity}</span>
              <span>₹{item.price * item.quantity}</span>
            </li>
          ))}
        </ul>
        <div className="border-t border-gray-300 pt-4 flex justify-between font-bold text-lg">
          <span>Total:</span>
          <span>₹{order.total}</span>
        </div>
        <div className="mt-6 flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition"
          >
            Close
          </button>
          <button
            onClick={handlePrint}
            className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
          >
            Print Bill
          </button>
        </div>
      </div>
    </div>
  );
};
