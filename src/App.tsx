import React, { useState } from 'react';
import { Header } from './components/Header';
import { CategoryNav } from './components/CategoryNav';
import { MenuItemCard } from './components/MenuItemCard';
import { Cart } from './components/Cart';
import { AIAssistant } from './components/AIAssistant';
import { PopularItems } from './components/PopularItems';
import { useCart } from './hooks/useCart';
import { useOrderHistory } from './hooks/useOrderHistory';
import { menuItems, menuCategories } from './data/menuData';
import { CheckCircle } from 'lucide-react';
import { Bill } from './components/Bill';

function App() {
  const [activeCategory, setActiveCategory] = useState('appetizers');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showOrderSuccess, setShowOrderSuccess] = useState(false);
  const [lastOrder, setLastOrder] = useState<null | { items: any[]; total: number; date: Date }>(null);
  const [showBill, setShowBill] = useState(false);

  const {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartItemCount,
  } = useCart();

  const { addOrder, getMostPurchasedItems } = useOrderHistory();

  const filteredItems = menuItems.filter(item => item.category === activeCategory);
  const mostPurchasedItems = getMostPurchasedItems(5);

  const handleCheckout = () => {
    if (cartItems.length === 0) return;

    const total = getCartTotal();

    // Add order to history
    addOrder(cartItems, total);

    // Save last order for bill display
    setLastOrder({
      items: cartItems,
      total,
      date: new Date(),
    });

    // Clear cart
    clearCart();

    // Close cart and show success message
    setIsCartOpen(false);
    setShowOrderSuccess(true);

    // Show bill modal
    setShowBill(true);

    // Hide success message after 3 seconds
    setTimeout(() => setShowOrderSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Success Toast */}
      {showOrderSuccess && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 flex items-center space-x-2">
          <CheckCircle className="h-5 w-5" />
          <span>Order placed successfully! 🎉</span>
        </div>
      )}

      <Header
        cartItemCount={getCartItemCount()}
        onCartClick={() => setIsCartOpen(true)}
      />

      <CategoryNav
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <main className="container mx-auto px-4 py-6">
        {/* Popular Items Section */}
        <PopularItems items={mostPurchasedItems} />

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <MenuItemCard
              key={item.id}
              item={item}
              onAddToCart={addToCart}
            />
          ))}
        </div>
      </main>

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        total={getCartTotal()}
        onCheckout={handleCheckout}
      />

      <AIAssistant mostPurchasedItems={mostPurchasedItems} />

      {showBill && lastOrder && (
        <Bill
          order={lastOrder}
          onClose={() => setShowBill(false)}
        />
      )}
    </div>
  );
}

export default App;
