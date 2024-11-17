import { Component, Input } from '@angular/core';
import { IPost } from '../../interfaces/ipost.interfaz';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {

  @Input( {required: true } ) post: IPost | null = null;

  selectPost(postId: number): any {
    localStorage.setItem('selectedPostId', postId.toString());
    console.log('Post seleccionado:', postId)
  }

}
