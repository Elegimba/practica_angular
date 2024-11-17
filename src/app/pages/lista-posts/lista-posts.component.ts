import { Component, inject } from '@angular/core';
import { PostComponent } from "../../components/post/post.component";
import { IPost } from '../../interfaces/ipost.interfaz';
import { ServicioService } from '../../services/servicio.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-posts',
  standalone: true,
  imports: [PostComponent, RouterLink],
  templateUrl: './lista-posts.component.html',
  styleUrl: './lista-posts.component.css'
})
export class ListaPostsComponent {
  
  arrPosts: IPost[] = [];
  arrCategorias: string[] = [];

  blogServices = inject(ServicioService);

  ngOnInit() {
    this.arrPosts = this.blogServices.getAll();
    this.arrCategorias = this.blogServices.getCategorias();
  }

  onChange($event: Event) {
    const selector = $event.target as HTMLSelectElement;
    console.log(selector.value, '1')
    if(selector.value === "") {
      this.arrPosts = this.blogServices.getAll();
    } else {      
      this.arrPosts = this.blogServices.getByCategory(selector.value);
    }
  }

  

}
