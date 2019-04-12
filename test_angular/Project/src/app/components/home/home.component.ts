import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Project } from 'src/app/modules/project.model';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  public subscription = Subscription;
  public projects: Project[] = [];
  public searchValue= '';

  constructor(public projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getAllProjects().subscribe((data: Project[]) => {
      this.projects = data;
      
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
    project.status = true;
    this.projectService.updateProject(project).subscribe((data: Project) => {
      this.projects = this.projects.filter(t => t.id !== data.id)
    })
  }

  onSearch(project:Project){
    return project.title.toLowerCase().includes(this.searchValue.toLowerCase());
  }
}