import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProjectService } from 'src/app/service/project.service';
import { Project } from 'src/app/modules/project.model';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-projectlist',
  templateUrl: './projectlist.component.html',
  styleUrls: ['./projectlist.component.css']
})
export class ProjectlistComponent implements OnInit {

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
        if (!project.status) {
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
  onProject(project) {
    project.finishdate = this.jstoday; 
    project.status = true;
    this.projectService.updateProject(project).subscribe((data: Project) => {
      this.projects = this.projects.filter(t => t.id !== data.id)
    })
  }
}
