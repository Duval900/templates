import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { PrefessionalCvComponent } from './templates/prefessional-cv/prefessional-cv.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'choose-template',
    pathMatch: 'full',
  },
  {
    path: 'choose-template',
    component: HomeComponentComponent
  },
  {
    path: 'professional-resume',
    component: PrefessionalCvComponent
   
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
