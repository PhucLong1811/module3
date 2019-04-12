import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@ANGULAR/forms';
import { Project } from 'src/app/modules/project.model';
import { ProjectService } from 'src/app/service/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projectadd',
  templateUrl: './projectadd.component.html',
  styleUrls: ['./projectadd.component.css']
})

export class ProjectaddComponent implements OnInit {

  public project = Project;
  public projectForm: FormGroup;
  constructor(
    public projectService: ProjectService,
    public routerService: Router,
    public formBuilder : FormBuilder
  ) { }

  ngOnInit() {
    this.projectForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(2)]],
      content: ['', [Validators.required, Validators.minLength(10)]],
      status:[false]
    })
  }

  onAdd(){
    this.projectService.addProject(this.projectForm.value).subscribe( data => {
     if(data && data.id)
     {
      this.routerService.navigate(['list']);
     }
   });
 }
}
