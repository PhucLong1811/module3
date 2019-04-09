import { NgModule } from '@angular/core';
import { Routes, RouterModule } from'@angular/router';
import { RegisterComponent } from './register/register.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { TodoComponent } from './todo/todo.component';
const routes: Routes = [
    {path: 'register',component: RegisterComponent},
    {path: 'template-driven-form',component: TemplateDrivenFormComponent},
    {path: 'todo',component:TodoComponent}
];
@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }