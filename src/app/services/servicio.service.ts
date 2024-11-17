import { Injectable } from '@angular/core';
import { IPost } from '../interfaces/ipost.interfaz';
import dayjs from 'dayjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private posts: IPost[] = [
    {
      id: 1,
      titulo: 'Test-Post',
      texto: 'Este post es una prueba para ver como va el tema',
      autor: 'Yo Mismo',
      imagen: 'https://viapais.com.ar/resizer/v2/7XKUVIER6JFZDGODBA42HUFTBQ.jpg?smart=true&auth=cf91e19121975f18e9522ee9ecef13c8e5dba9ce1c1a987c652f6c25146f915f&width=1200&height=630',
      categoria: 'Chorradas',
      fecha: dayjs('2024-11-15 17:24:13').format('DD - MMMM - YYYY --> H:mm:ss')
    },
    {
      id: 2,
      titulo: 'Test-Post2',
      texto: 'Este post es otra prueba para ver como va el tema',
      autor: 'Elmismo Deantes',
      imagen: 'https://ih1.redbubble.net/image.3087791994.3268/flat,750x,075,f-pad,750x1000,f8f8f8.jpg',
      categoria: 'Interés',
      fecha: dayjs('2024-11-16 21:05:54').format('DD - MMMM - YYYY --> H:mm:ss')
    }
  ]

  getAll() {
    const localPosts = localStorage.getItem('arrPostsLocal')
    return localPosts ? JSON.parse(localPosts) : this.posts;
  }

  getById(postId: number): any {
    return this.posts.find(post => post.id === postId);
  }

  getByCategory(categoria: string): IPost[] {
    return this.posts.filter(post => post.categoria === categoria)
  }

  pushPost(nuevoPost: IPost) {
    this.posts.push(nuevoPost);
    localStorage.setItem('arrPostsLocal', JSON.stringify(this.posts));
  }

  getCategorias(): string[] {
    const allCategorias = this.posts.map(post => post.categoria);
    const categoriasSelect = new Set(allCategorias);
    return [...categoriasSelect];
  }


}
