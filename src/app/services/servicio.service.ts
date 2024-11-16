import { Injectable } from '@angular/core';
import { Categoria, IPost } from '../interfaces/ipost.interfaz';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private arrPosts: IPost[] = [
    {
      id: 1,
      titulo: 'Test-Post',
      texto: 'Este post es una prueba para ver como va el tema',
      autor: 'Yo Mismo',
      imagen: 'https://viapais.com.ar/resizer/v2/7XKUVIER6JFZDGODBA42HUFTBQ.jpg?smart=true&auth=cf91e19121975f18e9522ee9ecef13c8e5dba9ce1c1a987c652f6c25146f915f&width=1200&height=630',
      categoria: Categoria.Chorradas,
      fecha: new Date
    },
    {
      id: 2,
      titulo: 'Test-Post2',
      texto: 'Este post es otra prueba para ver como va el tema',
      autor: 'Elmismo Deantes',
      imagen: 'https://ih1.redbubble.net/image.3087791994.3268/flat,750x,075,f-pad,750x1000,f8f8f8.jpg',
      categoria: Categoria.ContenidoDeInterés,
      fecha: new Date
    }
  ]

  getAll() {
    return this.arrPosts;
  }

  getByCategory(categoria: Categoria): IPost[] {
    return this.arrPosts.filter(post => post.categoria === categoria)
  }


}
