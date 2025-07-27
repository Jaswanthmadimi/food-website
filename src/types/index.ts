export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  popular?: boolean;
  link?: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface OrderHistory {
  id: string;
  items: CartItem[];
  total: number;
  date: Date;
}