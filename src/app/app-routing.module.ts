import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exercise78Component } from './exercise78/exercise78.component';
import { Exercise79Component } from './exercise79/exercise79.component';
import { Exercise80Component } from './exercise80/exercise80.component';
import { Exercise81Component } from './exercise81/exercise81.component';
import { Exercise82Component } from './exercise82/exercise82.component';
import { Exercise83Component } from './exercise83/exercise83.component';
import { Exercise84Component } from './exercise84/exercise84.component';
import { Exercise85Component } from './exercise85/exercise85.component';

const routes: Routes = [
  {
    path: 'exercise-78',
    component: Exercise78Component,
  },
  {
    path: 'exercise-79',
    component: Exercise79Component,
  },
  {
    path: 'exercise-80',
    component: Exercise80Component,
  },
  {
    path: 'exercise-81',
    component: Exercise81Component,
  },
  {
    path: 'exercise-82',
    component: Exercise82Component,
  },
  {
    path: 'exercise-83',
    component: Exercise83Component,
  },
  {
    path: 'exercise-84',
    component: Exercise84Component,
  },
  {
    path: 'exercise-85',
    component: Exercise85Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
