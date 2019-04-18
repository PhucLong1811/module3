import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule, Validators } from '@ANGULAR/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectComponent } from 'src/app/components/project/project.component';
import { ProjectaddComponent } from './components/projectadd/projectadd.component';
import { ProjecteditComponent } from './components/projectedit/projectedit.component';
import { ProjectlistComponent } from './components/projectlist/projectlist.component';
import { HomeComponent } from './components/home/home.component';
import { UndoneprojectComponent } from './components/undoneproject/undoneproject.component';
import { ErrorValidateComponent } from './components/error-Validate/error-Validate.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    ProjectaddComponent,
    ProjecteditComponent,
    ProjectlistComponent,
    ErrorValidateComponent,
    HomeComponent,
    UndoneprojectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
