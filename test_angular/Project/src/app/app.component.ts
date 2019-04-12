import { Component } from '@angular/core';
import { ProjectService } from './service/project.service';
import { Project } from './modules/project.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Project';
  public projects= Project;
  public subscription: Subscription;
  constructor
    (
      public projectService: ProjectService
    ) { }
  
}
