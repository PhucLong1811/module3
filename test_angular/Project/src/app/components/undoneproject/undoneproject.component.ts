import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Project } from 'src/app/modules/project.model';
import { ProjectService } from 'src/app/service/project.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-undoneproject',
  templateUrl: './undoneproject.component.html',
  styleUrls: ['./undoneproject.component.css']
})
export class UndoneprojectComponent implements OnInit {

  today = new Date();
  jstoday = '';
  public subscription = Subscription;
  public projects: Project[] = [];
  constructor(public projectService: ProjectService) {
    this.jstoday = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
   }

  ngOnInit() {
    this.projectService.getAllProjects().subscribe((data: Project[]) => {
      for (let project of data) {
        if (project.status) {
          this.projects.push(project);
        }
      }
    });
  }

  onDelete(id: number) {
    this.projectService.deleteProject(id).subscribe(data => {
      this.updateDataAfterdelete(id);
    });
  }
  updateDataAfterdelete(id: number) {
    for (var i = 0; i < this.projects.length; i++) {
      if (this.projects[i].id == id) {
        this.projects.splice(i, 1);
        break;
      }
    }
  }
  unProject(project) {
    project.finishdate = null; 
    project.status = false;
    this.projectService.updateProject(project).subscribe((data: Project) => {
      this.projects = this.projects.filter(t => t.id !== data.id)
    })
  }
}
