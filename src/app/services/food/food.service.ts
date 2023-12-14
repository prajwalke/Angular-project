import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}
  getAll():Foods[] {
    return [
      {
        id: 1,
        name: 'pizza pepporoni',
        cookTime: '10-20',
        price: 199,
        favorite: false,
        origins: ['itlay'],
        star: 4.5,
        imageUrl: '/assets/food-1.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 2,
        name: 'Manchurion Ball',
        cookTime: '10',
        price: 99,
        favorite: false,
        origins: ['China'],
        star: 4.5,
        imageUrl: '/assets/food-2.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 3,
        name: 'Burger',
        cookTime: '10',
        price: 59,
        favorite: false,
        origins: ['Germany'],
        star: 4.5,
        imageUrl: '/assets/food-3.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 4,
        name: 'French Frize',
        cookTime: '15',
        price: 69,
        favorite: false,
        origins: ['France'],
        star: 4.5,
        imageUrl: '/assets/food-4.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 5,
        name: 'Soup',
        cookTime: '10-20',
        price: 110,
        favorite: false,
        origins: ['France'],
        star: 4.5,
        imageUrl: '/assets/food-5.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 6,
        name: 'Noodels',
        cookTime: '10-20',
        price: 110,
        favorite: false,
        origins: ['China'],
        star: 4.5,
        imageUrl: '/assets/food-6.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 7,
        name: 'Sushi',
        cookTime: '30',
        price: 599,
        favorite: false,
        origins: ['Japan'],
        star: 4.5,
        imageUrl: '/assets/food-7.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 8,
        name: 'Ramen',
        cookTime: '10-20',
        price: 499,
        favorite: false,
        origins: ['Yokohama Chinatown'],
        star: 4.5,
        imageUrl: '/assets/food-8.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },

    ];
  }
}
