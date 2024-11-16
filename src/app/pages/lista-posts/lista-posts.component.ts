import { Component, inject } from '@angular/core';
import { PostComponent } from "../../components/post/post.component";
import { IPost } from '../../interfaces/ipost.interfaz';
import { ServicioService } from '../../services/servicio.service';

@Component({
  selector: 'app-lista-posts',
  standalone: true,
  imports: [PostComponent],
  templateUrl: './lista-posts.component.html',
  styleUrl: './lista-posts.component.css'
})
export class ListaPostsComponent {
  
arrPosts: IPost[] = [];

blogServices = inject(ServicioService);

ngOnInit() {
  this.arrPosts = this.blogServices.getAll();
}

  

}
