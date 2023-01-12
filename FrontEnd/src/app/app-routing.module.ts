import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ParentFormComponent} from "./components/parent-form/parent-form.component";

const routes: Routes = [
  { path: '', component: ParentFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
