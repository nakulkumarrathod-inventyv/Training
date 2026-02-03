import { Injectable, signal, computed } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  stock: number;
}

export interface CartItem extends Product {
  count: number;
  totalPrice: number;
}

@Injectable({ providedIn: 'root' })
export class Data {

  private products: Product[] = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 2999,
      stock: 15,
      image: 'https://sony.scene7.com/is/image/sonyglobalsolutions/WH1000XM6_Primary_image_Midnight_Blue?$primaryshotPreset$&fmt=png-alpha'
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 5499,
      stock: 8,
      image: 'https://www.lapcare.com/cdn/shop/files/Fitso_3_black.jpg'
    },
    {
      id: 3,
      name: 'Bluetooth Speaker',
      price: 1999,
      stock: 25,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIzMu5WqLvTGhf1yFCO2l_MGUs6eTuPEiu_Q&s'
    }
  ];

  getProducts() {
    return this.products;
  }

  isLogin = signal(false);
  toggleLogin() {
    this.isLogin.update(v => !v);
  }

  cartList = signal<CartItem[]>([]);

  countCartItem = computed(() =>
    this.cartList().reduce((sum, item) => sum + item.count, 0)
  );

  totalAmount = computed(() =>
    this.cartList().reduce((sum, item) => sum + item.totalPrice, 0)
  );

  addToCart(id: number) {
    if (!this.isLogin()) {
      alert('Login required...');
      return;
    }

    const product = this.products.find(p => p.id === id);
    if (!product) return;

    this.cartList.update(cart => {
      const existing = cart.find(c => c.id === id);

      if (existing) {
        if (existing.count >= product.stock) return cart;

        return cart.map(c =>
          c.id === id
            ? {
                ...c,
                count: c.count + 1,
                totalPrice: (c.count + 1) * c.price
              }
            : c
        );
      }

      return [
        ...cart,
        {
          ...product,
          count: 1,
          totalPrice: product.price
        }
      ];
    });
  }

  increase(id: number) {
    this.addToCart(id);
  }

  decrease(id: number) {
    this.cartList.update(cart =>
      cart
        .map(item =>
          item.id === id
            ? {
                ...item,
                count: item.count - 1,
                totalPrice: (item.count - 1) * item.price
              }
            : item
        )
        .filter(item => item.count > 0)
    );
  }

  remove(id: number) {
    this.cartList.update(cart => cart.filter(i => i.id !== id));
  }
}
