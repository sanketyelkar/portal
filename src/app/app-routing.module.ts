import { LoginGuard } from './core/authentication/guards/login.guard';
import { LoginComponent } from './modules/auth/pages/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'demo', pathMatch: 'full' },
      {
        path: 'demo',
        loadChildren: () =>
          import('./modules/demo/demo.module').then((m) => m.DemoModule),
      },
      {
        path: 'demo2',
        loadChildren: () =>
          import('./modules/demo2/demo2.module').then((m) => m.Demo2Module),
      },
      // {
      //   path: 'login',
      //   loadChildren: () =>
      //     import('./modules/auth/auth.module').then((m) => m.AuthModule),
      // },
    ],
  },
  {
    path: '',
    component: LoginComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      {
        path: 'login',
        loadChildren: () =>
          import('./modules/auth/auth.module').then((m) => m.AuthModule),
      },
    ],
  },
  {
    path: 'login',
    canActivate: [LoginGuard],
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
