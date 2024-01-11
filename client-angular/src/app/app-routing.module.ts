import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: 'auth',
      loadChildren: () => import('./pages/auth/auth-routing.module').then(m => m.AuthRoutingModule),
    },
    {
      path: "",
      component: LayoutComponent,
      children: [
        
      ]
    }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
