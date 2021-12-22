import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'foo',
  template: '',
})
export class FooComponent {}


const routes: Routes = [
  {
    path: '**',
    component: FooComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
