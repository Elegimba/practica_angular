import { Component, inject } from '@angular/core';
import { ServicioService } from '../../services/servicio.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IPost } from '../../interfaces/ipost.interfaz';
import { Router } from '@angular/router';

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
    console.log(this.formulario.value, 'formulario')
    const nuevoPost: IPost = {
      ...this.formulario.value,
      id: 0,
      fecha: new Date
    }
    console.log(nuevoPost)

    this.blogServices.pushPost(nuevoPost);
    this.router.navigateByUrl('/posts');
  }

}
