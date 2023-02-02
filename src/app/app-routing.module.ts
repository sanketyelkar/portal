import { Demo2Module } from './modules/demo2/demo2.module';
import { DemoModule } from './modules/demo/demo.module';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'demo', pathMatch: 'full' },
      {
        path: 'demo',
        loadChildren: () => import('./modules/demo/demo.module').then(m => m.DemoModule),
      },
      {
        path: 'demo2',
        loadChildren: () => import('./modules/demo2/demo2.module').then(m => m.Demo2Module),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
