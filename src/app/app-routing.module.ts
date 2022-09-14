import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'biblioteca-buscar',
    loadChildren: () => import('./biblioteca-buscar/biblioteca-buscar.module').then( m => m.BibliotecaBuscarPageModule)
  },
  {
    path: 'biblioteca-playlist',
    loadChildren: () => import('./biblioteca-playlist/biblioteca-playlist.module').then( m => m.BibliotecaPlaylistPageModule)
  },
  {
    path: 'biblioteca-albumes',
    loadChildren: () => import('./biblioteca-albumes/biblioteca-albumes.module').then( m => m.BibliotecaAlbumesPageModule)
  },
  {
    path: 'biblioteca-artistas',
    loadChildren: () => import('./biblioteca-artistas/biblioteca-artistas.module').then( m => m.BibliotecaArtistasPageModule)
  },
  {
    path: 'biblioteca-crear-playlist',
    loadChildren: () => import('./biblioteca-crear-playlist/biblioteca-crear-playlist.module').then( m => m.BibliotecaCrearPlaylistPageModule)
    path: 'madeforu',
    loadChildren: () => import('./madeforu/madeforu.module').then( m => m.MadeforuPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
