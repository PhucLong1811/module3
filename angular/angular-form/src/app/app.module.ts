import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ ReactiveFormsModule} from'@angular/forms';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { TodoComponent } from './todo/todo.component';

@NgModule({
   declarations: [
      AppComponent,
      TemplateDrivenFormComponent,
      RegisterComponent,
      TodoComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
