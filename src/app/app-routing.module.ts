import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ModelDrivenComponent } from './model-driven/model-driven.component';
import { TypedFormsComponent } from './typed-forms/typed-forms.component';

const routes: Routes = [
  {path: 'template-driven', component: TemplateDrivenComponent},
  {path: 'model-driven', component: ModelDrivenComponent},
  {path: 'typed-form', component: TypedFormsComponent},
  {path: '', redirectTo: 'template-driven', pathMatch: 'full'},
  {path: '**', redirectTo: 'template-driven'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
