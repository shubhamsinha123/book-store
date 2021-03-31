import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistermoduleComponent } from './registermodule/registermodule.component'
import { BooklistComponent } from './booklist/booklist.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'register', component: RegistermoduleComponent},
  // {path: 'book', component:BooklistComponent}
  {path: 'book', loadChildren:()=> import('./booklist/booklist.module').then(m => m.BooklistModule)}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
