import { useState, useCallback, useEffect } from 'react';
import { OrderHistory, CartItem, MenuItem } from '../types';

export const useOrderHistory = () => {
  const [orderHistory, setOrderHistory] = useState<OrderHistory[]>([]);

  // Load order history from localStorage on mount
  useEffect(() => {
    const savedHistory = localStorage.getItem('orderHistory');
    if (savedHistory) {
      try {
        const parsed = JSON.parse(savedHistory);
        setOrderHistory(parsed.map((order: any) => ({
          ...order,
          date: new Date(order.date)
        })));
      } catch (error) {
        console.error('Error loading order history:', error);
      }
    }
  }, []);

  // Save to localStorage whenever history changes
  useEffect(() => {
    if (orderHistory.length > 0) {
      localStorage.setItem('orderHistory', JSON.stringify(orderHistory));
    }
  }, [orderHistory]);

  const addOrder = useCallback((items: CartItem[], total: number) => {
    const newOrder: OrderHistory = {
      id: Date.now().toString(),
      items,
      total,
      date: new Date(),
    };

    setOrderHistory(prev => [newOrder, ...prev]);
  }, []);

  const getMostPurchasedItems = useCallback((limit: number = 5): (MenuItem & { purchaseCount: number })[] => {
    const itemCounts = new Map<string, { item: MenuItem; count: number }>();

    orderHistory.forEach(order => {
      order.items.forEach(cartItem => {
        const existing = itemCounts.get(cartItem.id);
        if (existing) {
          existing.count += cartItem.quantity;
        } else {
          itemCounts.set(cartItem.id, {
            item: cartItem,
            count: cartItem.quantity
          });
        }
      });
    });

    return Array.from(itemCounts.values())
      .sort((a, b) => b.count - a.count)
      .slice(0, limit)
      .map(({ item, count }) => ({
        ...item,
        purchaseCount: count
      }));
  }, [orderHistory]);

  const getTotalOrders = useCallback(() => orderHistory.length, [orderHistory]);

  const getTotalSpent = useCallback(() => {
    return orderHistory.reduce((total, order) => total + order.total, 0);
  }, [orderHistory]);

  return {
    orderHistory,
    addOrder,
    getMostPurchasedItems,
    getTotalOrders,
    getTotalSpent,
  };
};