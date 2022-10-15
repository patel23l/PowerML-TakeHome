import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component0Component } from 'src/app/component0/component0.component';

const routes: Routes = [
  {path: '', component: Component0Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }