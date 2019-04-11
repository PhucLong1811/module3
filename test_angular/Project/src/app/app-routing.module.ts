import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectComponent } from './components/project/project.component';
import { ProjecteditComponent } from './components/projectedit/projectedit.component';
import { ProjectlistComponent } from './components/projectlist/projectlist.component';
import { ProjectaddComponent } from './components/projectadd/projectadd.component';
import { UndoneprojectComponent } from './components/undoneproject/undoneproject.component';

const routes: Routes =
  [
    {
      path: '',
      component: HomeComponent,
    },
    {
      path: 'Project',
      component: ProjectComponent,
      children:
      [
        {
          path: ':id/edit',
          component: ProjecteditComponent,
        }
      ]
    },
    {
      path: 'list',
      component: ProjectlistComponent,
      
    },
    
    {
      path: 'add',
      component: ProjectaddComponent,
    },
    {
      path: 'projecdone',
      component: UndoneprojectComponent,
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
