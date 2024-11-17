import { Component, inject, Input } from '@angular/core';
import { IPost } from '../../interfaces/ipost.interfaz';
import { ServicioService } from '../../services/servicio.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-detalles-post',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './detalles-post.component.html',
  styleUrl: './detalles-post.component.css'
})
export class DetallesPostComponent {

  post: IPost | null = null;

  /* @Input() postId: number = 0; */

  blogServices = inject(ServicioService);

  

  ngOnInit(): void {
    const postId = localStorage.getItem('selectedPostId');
    if(postId) {
      this.post = this.blogServices.getById(Number(postId));
    } else {
      console.log('Aljo non vai')
    }
    console.log(postId)
  }

}
