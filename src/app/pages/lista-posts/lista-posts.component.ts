import { Component } from '@angular/core';
import { PostComponent } from "../../components/post/post.component";

@Component({
  selector: 'app-lista-posts',
  standalone: true,
  imports: [PostComponent],
  templateUrl: './lista-posts.component.html',
  styleUrl: './lista-posts.component.css'
})
export class ListaPostsComponent {

}
