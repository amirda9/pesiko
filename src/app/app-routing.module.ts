import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'verify',
    loadChildren: () => import('./verify/verify.module').then( m => m.VerifyPageModule)
  },
  {
    path: 'tracks',
    loadChildren: () => import('./tracks/tracks.module').then( m => m.TracksPageModule)
  },
  {
    path: 'pod-page',
    loadChildren: () => import('./pod-page/pod-page.module').then( m => m.PodPagePageModule)
  },
  {
    path: 'music',
    loadChildren: () => import('./music/music.module').then( m => m.MusicPageModule)
  },
  {
    path: 'post',
    loadChildren: () => import('./post/post.module').then( m => m.PostPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
