import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/courses.model';
import { Subscription } from 'rxjs';
import { CourseService } from 'src/app/services/course.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-courses-edit',
  templateUrl: './courses-edit.component.html',
  styleUrls: ['./courses-edit.component.css']
})
export class CoursesEditComponent implements OnInit {

  

    public course: Course;
    public subscription: Subscription;
    public subscriptionParams: Subscription;
   
   
    constructor
    (
      public courseService: CourseService,
      public routerService: Router,
      public activatedRouteService: ActivatedRoute
    ) { }
   
    ngOnInit() {
      this.course = new Course();
      this.loadData();
    }
   
    loadData() {
      this.subscriptionParams = this.activatedRouteService.params.subscribe((data : Params )=> {
       let id= data['id'];
        this.subscription = this.courseService.getCourse(id).subscribe((course :Course)=>{
          this.course = course;
        })
      });
    }
   
    onEdit(){
      this.subscriptionParams = this.courseService.updateCourse(this.course).subscribe((data: Course) =>{
   this.routerService.navigateByUrl('courses');
      });
    }
   
   
   
   
    
   }