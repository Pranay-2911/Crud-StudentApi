import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowtableComponent } from './showtable/showtable.component';
import { AddStudentcomponentComponent } from './add-studentcomponent/add-studentcomponent.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';
const routes: Routes = [
  {
    path: '',
    component: ShowtableComponent
  },
  {
    path: 'addstudent',
    component: AddStudentcomponentComponent
  },
  {
    path: 'updatestudent/:id',
    component: UpdatestudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
