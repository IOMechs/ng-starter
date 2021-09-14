import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [{
  path: '',
  component: LandingComponent
},{
  path: 'counter',
  component: CounterComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
