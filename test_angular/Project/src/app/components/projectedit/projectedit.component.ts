import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@ANGULAR/forms'
import { Project } from 'src/app/modules/project.model';
import { Params, Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProjectService } from 'src/app/service/project.service';


@Component({
  selector: 'app-projectedit',
  templateUrl: './projectedit.component.html',
  styleUrls: ['./projectedit.component.css']
})
export class ProjecteditComponent implements OnInit {

  public projects: Project;
  public subscription: Subscription;
  public subscriptionParams: Subscription;
  public projectForm: FormGroup
  


  constructor
    (
      public projectService: ProjectService,
      public routerService: Router,
      public activatedRouteService: ActivatedRoute,
      public formBuilder : FormBuilder
    ) { }

  ngOnInit() {
    this.projects = new Project();
    this.loadData();
  }

  loadData() {
    this.subscriptionParams = this.activatedRouteService.params.subscribe((data: Params) => {
      let id = data['id'];
      this.subscription = this.projectService.getProject(id).subscribe((projects: Project) => {
        this.projects = projects;
      })
    });
  }

  onEdit() {
    this.subscriptionParams = this.projectService.updateProject(this.projects).subscribe((data: Project) => {
      this.routerService.navigate(['/']);
    });
  }
}