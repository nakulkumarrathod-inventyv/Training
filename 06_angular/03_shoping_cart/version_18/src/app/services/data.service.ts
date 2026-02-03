import { Injectable } from '@angular/core';
import { count } from 'rxjs';

export interface Product{
  id: number;
  name: string;
  price: number;
  image: string;
  stock: number;
}

export interface cartItem extends Product{
  count: number;
  totalPrice: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
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

  getProducts(){
    return this.products;
  }

  isLogin = false
  toggleLogin(){
    this.isLogin = !this.isLogin;
  }

  totalAmout = (() => 
    this.cartList.reduce((sum, item) => sum + item.totalPrice, 0)
  )

  countCartItem = (() =>
    this.cartList.reduce((sum, item) => sum + item.count, 0)
  );

  cartList: cartItem[] = []

  addToCart(id: number){
    if(!this.isLogin){
      alert('Login required...')
      return
    }
    const product = this.products.find(p => p.id === id);
    if(!product) return
    const index = this.cartList.findIndex(i => i.id === id)
    if(index !== -1){
      if(this.cartList[index].count >= product.stock) return;
      const updatedItem = {
        ...this.cartList[index],
        count: this.cartList[index].count + 1,
        totalPrice: this.cartList[index].price * (this.cartList[index].count + 1)
      }
      this.cartList = this.cartList.map((c,i) => {
        return i === index ? updatedItem : c
      })
      return;
    }

    this.cartList = [
      ...this.cartList,
      {
        ...product,
        count: 1,
        totalPrice: product.price
      }
    ]
  }

  increase(id: number){
    if(!this.isLogin){
      alert('Login required...')
      return
    }
    this.addToCart(id);
  }

  decrease(id: number){
    if(!this.isLogin){
      alert('Login required...')
      return
    }
    this.cartList = this.cartList.map(
      i => i.id === id ? {
        ...i,
        count: i.count - 1,
        totalPrice: (i.count-1)*i.price
      } : i
    ).filter(i => i.count > 0)
  }

  remove(id: number){
    if(!this.isLogin){
      alert('Login required...')
      return
    }
    this.cartList = this.cartList.filter(i => i.id !== id);
  }
}
