import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CTRLLISTComponent } from './CRTL_F/ctrl-list/ctrl-list.component';
import { CrtlFormComponent } from './CRTL_F/crtl-form/crtl-form.component';
 

/* Criação das rotas para ligação front com back */
const routes: Routes = [
    {path:'categoria', component:CTRLLISTComponent},
    {path:'categoria/:id', component: CrtlFormComponent },
    {path:'categoria/novo', component: CrtlFormComponent  }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
