import { Component, inject } from '@angular/core';
import { ServicioService } from '../../services/servicio.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IPost } from '../../interfaces/ipost.interfaz';
import { Router } from '@angular/router';
import dayjs from 'dayjs';


@Component({
  selector: 'app-nuevo-post',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './nuevo-post.component.html',
  styleUrl: './nuevo-post.component.css'
})
export class NuevoPostComponent {

  blogServices = inject(ServicioService);
  router = inject(Router);


  formulario: FormGroup = new FormGroup( {
    titulo: new FormControl(),
    texto: new FormControl(),
    autor: new FormControl(),
    imagen: new FormControl(),
    categoria: new FormControl(''),
  })

  onSubmit() {
    console.log('Categoría seleccionada:', this.formulario.value.categoria);

    const posts = this.blogServices.getAll();
    let sigId = Math.max(...posts.map((post: { id: number; }) => post.id)) +1

    /* const mapCategoria = (value: string): Categoria => {
      return Categoria[value as keyof typeof Categoria];
    } */

    const nuevoPost: IPost = {
      ...this.formulario.value,
      id: sigId,
      fecha: dayjs().format('DD - MMMM - YYYY --> H:mm:ss'),
      /* categoria: mapCategoria(this.formulario.value.categoria) */
    }
    console.log(nuevoPost)

    this.blogServices.pushPost(nuevoPost);
    this.router.navigateByUrl('/posts');
  }

}
