import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../modules/project.model';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  public API: string = 'http://localhost:3000/project';
  constructor(public http: HttpClient) { }

  getAllProjects(){
    return this.http.get<Project[]>(this.API);
  }
  getProject(id:number){
    return this.http.get<Project>(`${this.API}/${id}`);
  }
  addProject(project:Project){
    return this.http.post<Project>(this.API,project); 
  }
  updateProject(project:Project){
    return this.http.put<Project>(`${this.API}/${project.id}`,project)
  }
  deleteProject(id:number){
    return this.http.delete<Project>(`${this.API}/${id}`); 
  }
}
