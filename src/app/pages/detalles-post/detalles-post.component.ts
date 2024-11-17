import { Component, inject, Input } from '@angular/core';
import { IPost } from '../../interfaces/ipost.interfaz';
import { ServicioService } from '../../services/servicio.service';

@Component({
  selector: 'app-detalles-post',
  standalone: true,
  imports: [],
  templateUrl: './detalles-post.component.html',
  styleUrl: './detalles-post.component.css'
})
export class DetallesPostComponent {

  post: IPost | null = null;

  @Input() postId: number = 0;

  blogServices = inject(ServicioService);

  

  ngOnInit() {
    
  }

}
