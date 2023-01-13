import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ParentFormComponent} from "./components/parent-form/parent-form.component";
import {UsersResolverService} from "./services/users-resolver.service";

const routes: Routes = [
  { path: '', component: ParentFormComponent,
    resolve: { users: UsersResolverService}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
