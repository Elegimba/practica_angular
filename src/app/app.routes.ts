import { Routes } from '@angular/router';
import { ListaPostsComponent } from './pages/lista-posts/lista-posts.component';
import { NuevoPostComponent } from './pages/nuevo-post/nuevo-post.component';
import { DetallesPostComponent } from './pages/detalles-post/detalles-post.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/posts' },
    { path: 'posts', component: ListaPostsComponent },
    { path: 'nuevo', component: NuevoPostComponent },
    { path: 'detalles', component: DetallesPostComponent }
];
