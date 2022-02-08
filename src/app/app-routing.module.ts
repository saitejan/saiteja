import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PComponent } from "./p/p.component";
import { MSComponent } from "./ms/ms.component";


const routes: Routes = [
  {
    path: 'p', component: PComponent,
  },
  {
    path: 'ms', component: MSComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
