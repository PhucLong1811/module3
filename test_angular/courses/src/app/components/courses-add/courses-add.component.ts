import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/courses.model';
import { Subscription } from 'rxjs';
import { CourseService } from 'src/app/services/course.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@ANGULAR/forms';
 

@Component({
  selector: 'app-courses-add',
  templateUrl: './courses-add.component.html',
  styleUrls: ['./courses-add.component.css']
})
export class CoursesAddComponent implements OnInit {

  public course : Course;
  public courseForm: FormGroup;
  constructor(
    public courseService: CourseService,
    public routerService: Router,
    public formBuilder : FormBuilder
    ) { }

  ngOnInit() {
    this.courseForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      description: ['', [Validators.required, Validators.maxLength(20)]],
      fee: ['', [Validators.min(0)]],status:[false]
    })
  }
  onAdd(){
     this.courseService.addCourse(this.courseForm.value).subscribe( data => {
      if(data)
      {
        this.routerService.navigate(['courses']);
      }
    });
  }
  
}
